"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/galleri/1.jpeg", alt: "Galeri Klinik Primer Cherang 1" },
  { src: "/galleri/2.jpeg", alt: "Galeri Klinik Primer Cherang 2" },
  { src: "/galleri/3.jpeg", alt: "Galeri Klinik Primer Cherang 3" },
  { src: "/galleri/4.jpeg", alt: "Galeri Klinik Primer Cherang 4" },
  { src: "/galleri/5.jpeg", alt: "Galeri Klinik Primer Cherang 5" },
];

const VISIBLE = 3;

export default function GallerySection() {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = images.length - VISIBLE;

  const prev = useCallback(() => {
    setStartIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setStartIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  return (
    <section
      id="galleri"
      className="py-20 sm:py-28 bg-gradient-to-b from-muted/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Galeri Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat suasana dan kemudahan di Klinik Primer Cherang Pasir Mas.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: "16px",
                transform: `translateX(calc(-${startIndex} * (100% / ${VISIBLE} + 16px * ${VISIBLE - 1} / ${VISIBLE})))`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          {startIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
          )}

          {/* Right arrow */}
          {startIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Seterusnya"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
