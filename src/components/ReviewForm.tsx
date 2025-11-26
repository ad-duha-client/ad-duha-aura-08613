import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSubmitReview } from "@/hooks/useReviews";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ReviewFormProps {
  productId: string;
  onClose?: () => void;
}

export const ReviewForm = ({ productId, onClose }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const submitReview = useSubmitReview();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate("/auth");
      return;
    }

    if (rating === 0) {
      return;
    }

    submitReview.mutate(
      {
        productId,
        rating,
        title: title || undefined,
        comment: comment || undefined,
      },
      {
        onSuccess: () => {
          setRating(0);
          setTitle("");
          setComment("");
          onClose?.();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-base font-semibold">Your Rating *</Label>
        <div className="flex items-center gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`h-8 w-8 ${
                  star <= (hoveredRating || rating)
                    ? "fill-primary text-primary"
                    : "text-muted"
                }`}
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="ml-2 text-sm text-muted-foreground">
              {rating} out of 5 stars
            </span>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="title">Review Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Sum up your experience"
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="comment">Your Review</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts about this product..."
          className="mt-2 min-h-[120px]"
        />
      </div>

      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={rating === 0 || submitReview.isPending}
          className="flex-1"
        >
          {submitReview.isPending ? "Submitting..." : "Submit Review"}
        </Button>
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};
