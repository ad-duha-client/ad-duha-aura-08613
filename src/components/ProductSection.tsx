import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { perfumes } from "@/data/perfumes";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isPremium?: boolean;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  isPremium?: boolean;
}

export const ProductSection = ({ 
  title, 
  subtitle, 
  products, 
  isPremium = false 
}: ProductSectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => {
            const perfume = perfumes.find(p => p.id === product.id);
            return (
              <Link key={product.id} to={perfume ? `/perfumes/${perfume.slug}` : '#'}>
                <ProductCard
                  {...product}
                  isPremium={isPremium}
                />
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button 
              variant={isPremium ? "luxury" : "premium"} 
              size="lg"
              className="px-8 py-3"
            >
              View All {isPremium ? "Premium" : ""} Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};