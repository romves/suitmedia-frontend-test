import React from 'react';

import { Navbar } from '@/shared/components/navbar';
import { Banner } from '@/shared/components/banner';
import { customMetadataGenerator } from '@/shared/lib/metadata/custom-metadata-gen';

export async function generateMetadata() {
  return customMetadataGenerator({
    title: 'Home',
    description: 'Where all our great things begin',
  });
}

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="min-h-screen pt-16">{children}</div>
    </>
  );
}
