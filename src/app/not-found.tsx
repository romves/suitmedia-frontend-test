import { buttonVariants } from '@/shared/components/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className={buttonVariants()}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
