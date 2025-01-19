'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const Banner = ({ bannerUrl }: { bannerUrl?: string }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="clip-banner relative h-[60vh]">
      <motion.div
        className="relative flex h-full w-full items-center justify-center pt-20"
        style={{
          y: y1,
        }}
      >
        <Image
          src={
            bannerUrl ??
            'https://suitmedia.static-assets.id/strapi/large_idea_bg_8ffbf74725.jpg'
          }
          alt="banner"
          loading="eager"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40" />

        <motion.div
          style={{
            y: y2,
          }}
          className="text-center text-white"
        >
          <h1 className="relative text-5xl font-medium">Ideas</h1>
          <p className="relative text-lg font-medium">
            Where all our great things begin
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
