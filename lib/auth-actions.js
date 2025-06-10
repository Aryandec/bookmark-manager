"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient(); // ✅ now async

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = await createClient(); // ✅ now async

  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");

  const { error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
      data: {
        full_name: `${firstName} ${lastName}`,
        email: formData.get("email"),
      },
    },
  });

  if (error) {
    return { success: false, message: error.message }; // ❗return instead of redirect
  }

  return { success: true }; // ✅ we'll handle dialog on client
}

export async function signout() {
  const supabase = await createClient(); // ✅ now async
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return redirect("/error");
  }

  redirect("/auth/logout");
}

export async function signInWithGoogle() {
  const supabase = await createClient(); // ✅ now async
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.error(error);
    return redirect("/error");
  }

  redirect(data.url);
}
