import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const genderCategories = [
  {
    id: "men",
    title: "MEN",
    subtitle: "Men's Perfume For Your Masculine Spirit",
    image: "/lovable-uploads/men-perfume-new.jpg",
    link: "/products?gender=Male",
  },
  {
    id: "women",
    title: "WOMEN",
    subtitle: "Fragrances to Empower Your Feminine Side",
    image: "/lovable-uploads/women-perfume-new.png",
    link: "/products?gender=Female",
  },
  {
    id: "unisex",
    title: "UNISEX",
    subtitle: "Limitless Scents Beyond Genders",
    image: "/lovable-uploads/unisex-perfume-new.jpg",
    link: "/products?gender=Unisex",
  },
];

export const GenderSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {genderCategories.map((category) => (
            <Link key={category.id} to={category.link}>
              <div className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wider">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-6 max-w-xs">
                    {category.subtitle}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
