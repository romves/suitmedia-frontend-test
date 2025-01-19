import { fontVariables } from '@/shared/lib/fonts';
import { cn } from '@/shared/lib/utils';
import './globals.css';
import { QueryProvider } from '@/shared/providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontVariables, `antialiased`)}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
