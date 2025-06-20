import React from 'react';
import Image from 'next/image';
import SectionHeading from './section-heading';
import { useTheme } from '@/context/ThemeContext';

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = () => {
  const { isDark } = useTheme();
  
  const galleryImages: GalleryImage[] = [
    {
      src: '/gallery/square1.jpg',
      alt: 'No tree it is said can grow to heaven, unless its root reached down to hell'
    },
    {
      src: '/gallery/square2.jpg',
      alt: 'Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.'
    },
    {
      src: '/gallery/square3.jpg',
      alt: 'A WISE MAN IS ASHAMED OF WHAT A FOOL IS PROUD OF'
    },
    {
      src: '/gallery/square4.jpg',
      alt: 'Power isn’t loud. Its the calm in your eyes when they expect fear'
    },
    {
      src: '/gallery/square5.jpg',
      alt: 'Even in a world of chaos, some souls rise to dance among the stars'
    },
    {
      src: '/gallery/square6.jpg',
      alt: 'The villain will always be the villain if the hero tells the story'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <SectionHeading 
        title="Gallery" 
        subtitle="A glimpse into my journey and achievements"
      />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`aspect-square rounded-lg overflow-hidden 
                         ${isDark ? 'border-2 border-white/20' : 'border-2 border-black/20'}
                         transition-transform duration-300 hover:scale-105
                         hover:shadow-lg ${isDark ? 'hover:shadow-white/10' : 'hover:shadow-black/10'}`}
            >
              <div className="relative w-full h-full group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300
                 flex items-end justify-center`}>
  <p className="text-white text-sm font-medium text-center w-full pb-4 px-2">{image.alt}</p>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 