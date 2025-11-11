import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";

const Products = () => {
  const { data: products = [], isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedGender, setSelectedGender] = useState<string>("All");

  // Read category and gender from URL on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const genderParam = searchParams.get("gender");
    
    if (categoryParam && ["Premium", "Niche", "Signature", "Luxury"].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    
    if (genderParam) {
      // Map URL gender values to internal values
      const genderMap: { [key: string]: string } = {
        "Male": "men",
        "Female": "women",
        "Unisex": "unisex"
      };
      const mappedGender = genderMap[genderParam] || genderParam.toLowerCase();
      if (["men", "women", "unisex"].includes(mappedGender)) {
        setSelectedGender(mappedGender);
        setSelectedCategory("All"); // Reset category when filtering by gender
      }
    }
  }, [searchParams]);

  const categories = ["All", "Premium", "Niche", "Signature", "Luxury"];
  const genders = ["All", "men", "women", "unisex"];

  const filteredPerfumes = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.categories?.name === selectedCategory;
    const genderMatch = selectedGender === "All" || product.gender === selectedGender;
    return categoryMatch && genderMatch;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading products...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perfume Catalog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our signature scents
            </p>
          </header>

          {/* Filter Section */}
          <section className="mb-12">
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchParams({});
                    }}
                    className="transition-all"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">For</h3>
              <div className="flex flex-wrap gap-3">
                {genders.map((gender) => (
                  <Button
                    key={gender}
                    variant={selectedGender === gender ? "default" : "outline"}
                    onClick={() => {
                      setSelectedGender(gender);
                      setSearchParams({});
                    }}
                    className="transition-all"
                  >
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredPerfumes.length} {filteredPerfumes.length === 1 ? 'perfume' : 'perfumes'}
            </p>
          </div>

          {/* Products Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPerfumes.map((product) => (
              <Link key={product.id} to={`/perfumes/${product.slug}`}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.compare_at_price || product.price}
                  image={product.image_url || '/lovable-uploads/logo.png'}
                  category={product.categories?.name || 'Premium'}
                  isPremium={(product.compare_at_price || 0) >= 1700}
                />
              </Link>
            ))}
          </section>

          {/* No Results */}
          {filteredPerfumes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No perfumes found matching your filters.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
