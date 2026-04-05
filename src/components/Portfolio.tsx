"use client";

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './ui/Lightbox'; // Assuming Lightbox is in src/components/ui

const tattooImages = Array.from({ length: 12 }, (_, i) => `/tattoos/${i + 1}.png`);

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tattooImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(src)}
            >
              <Image
                src={src}
                alt={`Tattoo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox isOpen={lightboxOpen} imageSrc={selectedImage} onClose={closeLightbox} />
    </section>
  );
}
