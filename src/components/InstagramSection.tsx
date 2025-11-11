"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Play } from "lucide-react";

const instagramReels = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/dhhzovqp6/video/upload/so_5,f_jpg,q_auto:good/You_know_EXACTLY_what_I_want_%EF%B8%8F_fragrance_cologne_viral_smellgood_perfume_ejm11q.jpg",
    title: "Perfumes for Gifting",
    views: "10.2K",
    video: "https://res.cloudinary.com/dhhzovqp6/video/upload/v1762423738/You_know_EXACTLY_what_I_want_%EF%B8%8F_fragrance_cologne_viral_smellgood_perfume_ejm11q.mp4", // put your real mp4 here
  },
  {
    id: 2,
    thumbnail: "https://res.cloudinary.com/dhhzovqp6/video/upload/so_1,f_jpg,q_auto:good/Day_115_of_100_Days_100_Designs_Challenge_-_Animated_Video_Canva_Follow_socialcanvasbyrahul_f_prto8x.jpg",
    title: "Designing challenge",
    views: "8.5K",
    video: "https://res.cloudinary.com/dhhzovqp6/video/upload/v1762423738/Day_115_of_100_Days_100_Designs_Challenge_-_Animated_Video_Canva_Follow_socialcanvasbyrahul_f_prto8x.mp4",
  },
  // {
  //   id: 3,
  //   thumbnail: "https://images.unsplash.com/photo-1588932966-c4edf2e67d10?w=400",
  //   title: "Fragrance Notes Guide",
  //   views: "15.7K",
  //   video: "/videos/reel3.mp4",
  // },
  // {
  //   id: 4,
  //   thumbnail: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
  //   title: "Customer Reviews",
  //   views: "12.1K",
  //   video: "/videos/reel4.mp4",
  // },
];

export const InstagramSection = () => {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an inside look at our fragrance world through our Instagram reels and stories
          </p>
        </div>

        {/* Instagram Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {instagramReels.map((reel) => (
            <Card
              key={reel.id}
              className="group relative overflow-hidden bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer"
              onClick={() => setPlayingId(playingId === reel.id ? null : reel.id)}
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                {playingId === reel.id ? (
                  <video
                    src={reel.video}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                    onClick={(e) => e.stopPropagation()} // prevent closing on video click
                  />
                ) : (
                  <>
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 text-primary-foreground fill-current" />
                      </div>
                    </div>

                    {/* Views Count */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-white text-xs font-medium">{reel.views}</span>
                    </div>
                  </>
                )}
              </div>

              <CardContent className="p-3">
                <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                  {reel.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <Button variant="premium" size="lg" className="px-8 py-3">
            <Instagram className="h-5 w-5 mr-2" />
            Follow @adduha
          </Button>
        </div>
      </div>
    </section>
  );
};
