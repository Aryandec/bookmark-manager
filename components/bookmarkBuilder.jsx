"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@clerk/nextjs";
import { createBookmark } from "@/libs/actions/bookmark.actions";
import { useRouter } from "next/navigation";

export default function CreateBookmark() {
  const { getToken } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const clerkToken = await getToken({ template: "supabase" });
      await createBookmark({
        title: data.title,
        url: data.url,
        description: data.description,
        notes: data.notes // Add notes column to your table first
      }, clerkToken);
      
      reset();
      router.push("/bookmarks");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Add New Bookmark
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title Field */}
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter bookmark title"
              />
              {errors.title && (
                <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
              )}
            </div>

            {/* URL Field */}
            <div>
              <Label htmlFor="url">URL *</Label>
              <Input
                id="url"
                type="url"
                {...register("url", { 
                  required: "URL is required",
                  pattern: {
                    value: /^(https?:\/\/).+$/,
                    message: "Enter a valid URL"
                  }
                })}
                placeholder="https://example.com"
              />
              {errors.url && (
                <p className="text-sm text-red-500 mt-1">{errors.url.message}</p>
              )}
            </div>

            {/* Description Field */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Short description about the bookmark"
              />
            </div>

            {/* Notes Field */}
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                {...register("notes")}
                placeholder="Any additional notes"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Bookmark"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}