import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

const heroSlides = [
  {
    id: 1,
    title: "Discover Luxury Fragrances",
    subtitle: "Experience the art of perfumery with Ad Duha's exclusive collection",
    cta: "Shop Now",
    image: heroImage,
  },
  {
    id: 2,
    title: "Premium Fragrance Collection",
    subtitle: "Crafted with the finest ingredients for the discerning connoisseur",
    cta: "Explore Premium",
    image: heroImage,
  },
  {
    id: 3,
    title: "Signature Scents",
    subtitle: "Find your perfect fragrance that tells your unique story",
    cta: "Find Yours",
    image: heroImage,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            {heroSlides[currentSlide].subtitle}
          </p>
          <Button 
            variant="luxury" 
            size="lg"
            className="text-lg px-8 py-6 animate-fade-in hover:animate-glow"
          >
            {heroSlides[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-foreground hover:text-primary transition-colors duration-300"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-foreground hover:text-primary transition-colors duration-300"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary shadow-gold-glow"
                : "bg-muted hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};