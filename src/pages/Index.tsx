import { Navbar } from "@/components/Navbar";
import { FestiveBanner } from "@/components/FestiveBanner";
import { ProductSection } from "@/components/ProductSection";
import { GenderSection } from "@/components/GenderSection";
import { InstagramSection } from "@/components/InstagramSection";
import { perfumes } from "@/data/perfumes";

// Best Sellers - Popular fragrances
const bestSellers = perfumes.filter(p => 
  [3 ,5 ,7,11,14,16].includes(p.id)
).map(p => ({
  id: p.id,
  name: p.name,
  price: p.price,
  originalPrice: p.mrp,
  image: p.image,
  category: p.category,
}));

// Feautured - Luxury fragrances with highest MRP
const premiumProducts = perfumes.filter(p => p.mrp >= 1700).map(p => ({
  id: p.id,
  name: p.name,
  price: p.price,
  originalPrice: p.mrp,
  image: p.image,
  category: p.category,
  isPremium: true,
}));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FestiveBanner />
      <Navbar />
      <main>
        <GenderSection />
        <ProductSection
          title="Best Sellers"
          subtitle="Discover our most loved fragrances that have captivated hearts worldwide"
          products={bestSellers}
        />
        <ProductSection
          title="Feautured"
          subtitle="Exquisite fragrances crafted with the rarest and finest ingredients"
          products={premiumProducts}
          isPremium={true}
        />
        <InstagramSection />
      </main>
    </div>
  );
};

export default Index;
