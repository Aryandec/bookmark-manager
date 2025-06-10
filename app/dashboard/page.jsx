
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";


export default async function DashboardPage() {
   const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login"); 
  }

  return (
    <div>
      <h1>Welcome to your dashboard, {user.email}</h1>
    </div>
  );
}
