'use client';

import { useState, useEffect } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  // State untuk menyimpan ukuran radius (default 600 untuk desktop)
  const [galleryRadius, setGalleryRadius] = useState(600);

  const userImages = [
    '/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg', '/5.jpeg',
    '/6.jpeg', '/7.jpeg', '/8.jpeg', '/9.jpeg', '/10.jpeg',
    '/11.jpeg', '/12.jpeg', '/13.jpeg', '/14.jpeg', '/15.jpeg',
  ];

  // Efek untuk mendeteksi ukuran layar (HP vs Laptop)
  useEffect(() => {
    const handleResize = () => {
      // Jika lebar layar kurang dari 768px (HP/Tablet), kecilkan radius ke 300
      if (window.innerWidth < 768) {
        setGalleryRadius(350); 
      } else {
        setGalleryRadius(600);
      }
    };

    // Jalankan saat pertama kali dibuka
    handleResize();

    // Jalankan setiap kali layar diubah ukurannya
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Gunakan h-[100dvh] agar tinggi pas di browser HP (Chrome/Safari Mobile)
    <main className="w-screen h-[100dvh] bg-[#060010] overflow-hidden relative">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          {/* Audio tetap ada */}
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />
          
          <DomeGallery
            images={userImages}
            fit={0.8}
            // Gunakan radius yang dinamis (berubah sesuai layar)
            minRadius={galleryRadius} 
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
