import { Navbar } from "@/components/Navbar";
import { FestiveBanner } from "@/components/FestiveBanner";
import { ProductSection } from "@/components/ProductSection";
import { GenderSection } from "@/components/GenderSection";
import { InstagramSection } from "@/components/InstagramSection";
import { useProducts, useFeaturedProducts } from "@/hooks/useProducts";

const Index = () => {
  const { data: products = [], isLoading } = useProducts();
  const { data: featuredProducts = [] } = useFeaturedProducts();

  // Best Sellers - Featured products
  const bestSellers = featuredProducts.map(p => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    price: p.price,
    originalPrice: p.compare_at_price || p.price,
    image: p.image_url || '/lovable-uploads/logo.png',
    category: p.categories?.name || 'Premium',
  }));

  // Premium - Luxury fragrances with highest MRP
  const premiumProducts = products
    .filter(p => (p.compare_at_price || 0) >= 1700)
    .map(p => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      price: p.price,
      originalPrice: p.compare_at_price || p.price,
      image: p.image_url || '/lovable-uploads/logo.png',
      category: p.categories?.name || 'Luxury',
      isPremium: true,
    }));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <FestiveBanner />
      <Navbar />
      <main>
        <GenderSection />
        {bestSellers.length > 0 && (
          <ProductSection
            title="Best Sellers"
            subtitle="Discover our most loved fragrances that have captivated hearts worldwide"
            products={bestSellers}
          />
        )}
        {premiumProducts.length > 0 && (
          <ProductSection
            title="Featured"
            subtitle="Exquisite fragrances crafted with the rarest and finest ingredients"
            products={premiumProducts}
            isPremium={true}
          />
        )}
        <InstagramSection />
      </main>
    </div>
  );
};

export default Index;
