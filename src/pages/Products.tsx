import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { perfumes } from "@/data/perfumes";
import { Button } from "@/components/ui/button";

const Products = () => {
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
        "Male": "Men",
        "Female": "Women",
        "Unisex": "Unisex"
      };
      const mappedGender = genderMap[genderParam] || genderParam;
      if (["Men", "Women", "Unisex"].includes(mappedGender)) {
        setSelectedGender(mappedGender);
        setSelectedCategory("All"); // Reset category when filtering by gender
      }
    }
  }, [searchParams]);

  const categories = ["All", "Premium", "Niche", "Signature", "Luxury"];
  const genders = ["All", "Men", "Women", "Unisex"];

  const filteredPerfumes = perfumes.filter((perfume) => {
    const categoryMatch = selectedCategory === "All" || perfume.category === selectedCategory;
    const genderMatch = selectedGender === "All" || perfume.audience === selectedGender;
    return categoryMatch && genderMatch;
  });

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
                      // Clear URL params when clicking filter buttons
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
                      // Clear URL params when clicking filter buttons
                      setSearchParams({});
                    }}
                    className="transition-all"
                  >
                    {gender}
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
            {filteredPerfumes.map((perfume) => (
              <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
                <ProductCard
                  id={perfume.id}
                  name={perfume.name}
                  price={perfume.price}
                  originalPrice={perfume.mrp}
                  image={perfume.image}
                  category={perfume.category}
                  isPremium={perfume.mrp >= 1700}
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
