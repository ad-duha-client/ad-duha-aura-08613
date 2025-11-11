import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, ArrowLeft, Star } from "lucide-react";
import { useState } from "react";
import { useProductBySlug, useProducts } from "@/hooks/useProducts";

const ProductDetail = () => {
  const { slug } = useParams();
  const { data: perfume, isLoading } = useProductBySlug(slug);
  const { data: allProducts = [] } = useProducts();
  const [isLiked, setIsLiked] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading product...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!perfume) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button variant="luxury">Back to Catalog</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const discount = perfume.compare_at_price 
    ? Math.round(((perfume.compare_at_price - perfume.price) / perfume.compare_at_price) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>

          {/* Product Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={perfume.image_url || '/lovable-uploads/logo.png'}
                  alt={perfume.name}
                  className="w-full h-full object-cover"
                />
                {(perfume.compare_at_price || 0) >= 1700 && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                    Premium
                  </div>
                )}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"
                    }`}
                  />
                </button>
              </div>
            </Card>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {perfume.categories?.name || 'Premium'} • For {perfume.gender?.charAt(0).toUpperCase() + perfume.gender?.slice(1) || 'All'}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {perfume.name}
                </h1>
                <div className="flex items-baseline space-x-3 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ₹{perfume.price.toLocaleString('en-IN')}
                  </span>
                  {perfume.compare_at_price && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{perfume.compare_at_price.toLocaleString('en-IN')}
                      </span>
                      {discount > 0 && (
                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                          {discount}% OFF
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <Card className="mb-6 flex-grow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">About This Fragrance</h2>
                  <div className="text-muted-foreground space-y-4 whitespace-pre-line leading-relaxed">
                    {perfume.description}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="premium" size="lg" className="flex-1">
                  Buy Now
                </Button>
              </div>

              {/* Additional Info */}
              {/* <div className="mt-8 p-4 border border-border rounded-lg">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Authentic Indian fragrances</li>
                  <li>✓ Long-lasting formulation</li>
                  <li>✓ Premium quality ingredients</li>
                  <li>✓ Free shipping on orders above ₹2,999</li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* Reviews & Ratings Section */}
          <section className="mt-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
                
                {/* Overall Rating Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-border">
                  {/* Average Rating */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold text-foreground mb-2">4.8</div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-6 w-6 ${
                            star <= 5 ? "fill-primary text-primary" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">Based on 247 reviews</p>
                  </div>

                  {/* Rating Breakdown */}
                  <div className="space-y-3">
                    {[
                      { stars: 5, count: 189, percentage: 77 },
                      { stars: 4, count: 42, percentage: 17 },
                      { stars: 3, count: 12, percentage: 5 },
                      { stars: 2, count: 3, percentage: 1 },
                      { stars: 1, count: 1, percentage: 0 },
                    ].map((rating) => (
                      <div key={rating.stars} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-foreground w-12">
                          {rating.stars} star
                        </span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12 text-right">
                          {rating.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Priya Sharma",
                      rating: 5,
                      date: "2 weeks ago",
                      review: "Absolutely love this fragrance! The scent is long-lasting and sophisticated. Perfect for both day and evening wear. Highly recommend!",
                      verified: true,
                    },
                    {
                      name: "Rahul Verma",
                      rating: 5,
                      date: "1 month ago",
                      review: "One of the best perfumes I've ever purchased. The quality is exceptional and the fragrance notes are perfectly balanced. Worth every rupee!",
                      verified: true,
                    },
                    {
                      name: "Anjali Patel",
                      rating: 4,
                      date: "1 month ago",
                      review: "Beautiful scent that lasts all day. The packaging is luxurious and makes for a great gift. Only minus is it's a bit pricey, but quality justifies the cost.",
                      verified: true,
                    },
                    {
                      name: "Arjun Malhotra",
                      rating: 5,
                      date: "2 months ago",
                      review: "Exceptional fragrance! The blend is unique and gets compliments everywhere I go. Fast delivery and secure packaging too.",
                      verified: true,
                    },
                  ].map((review, index) => (
                    <div key={index} className="pb-6 border-b border-border last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            {review.verified && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating
                                      ? "fill-primary text-primary"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                    </div>
                  ))}
                </div>

                {/* Write Review Button */}
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <Button variant="default" size="lg">
                    Write a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Products Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts
                .filter((p) => p.id !== perfume.id && p.gender === perfume.gender)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/perfumes/${relatedProduct.slug}`}>
                    <Card className="group relative overflow-hidden bg-card hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={relatedProduct.image_url || '/lovable-uploads/logo.png'}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                          {relatedProduct.categories?.name || 'Premium'}
                        </p>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary">
                            ₹{relatedProduct.price.toLocaleString('en-IN')}
                          </span>
                          {relatedProduct.compare_at_price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{relatedProduct.compare_at_price.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
