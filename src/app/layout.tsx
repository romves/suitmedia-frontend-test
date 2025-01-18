import { fontVariables } from '@/shared/lib/fonts';
import { cn } from '@/shared/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '@/shared/providers';


export const metadata: Metadata = {
  title: 'Create Next Apps',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(fontVariables, `antialiased`)}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
