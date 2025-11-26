import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title: string | null;
  comment: string | null;
  is_verified: boolean | null;
  created_at: string;
  profiles?: {
    full_name: string | null;
    email: string;
  };
}

export const useProductReviews = (productId: string | undefined) => {
  return useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      if (!productId) return [];
      
      const { data: reviews, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("product_id", productId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (!reviews) return [];

      // Fetch profiles for all reviews
      const userIds = [...new Set(reviews.map(r => r.user_id))];
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, full_name, email")
        .in("id", userIds);

      // Merge profiles with reviews
      const profileMap = new Map(profiles?.map(p => [p.id, p]) || []);
      
      return reviews.map(review => ({
        ...review,
        profiles: profileMap.get(review.user_id) || null,
      })) as Review[];
    },
    enabled: !!productId,
  });
};

export const useSubmitReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      rating,
      title,
      comment,
    }: {
      productId: string;
      rating: number;
      title?: string;
      comment?: string;
    }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("reviews")
        .insert({
          product_id: productId,
          user_id: user.id,
          rating,
          title: title || null,
          comment: comment || null,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reviews", variables.productId] });
      toast.success("Review submitted successfully!");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to submit review");
    },
  });
};
