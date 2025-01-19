import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { cn } from '@/shared/lib/utils';

interface INavLinkProps {
  title: string;
  href: string;
  isMobile?: boolean;
}

const NavLink = ({ title, href, isMobile }: INavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'relative font-semibold transition-all duration-150',
        isActive
          ? isMobile
            ? 'text-primary-600'
            : 'text-white'
          : 'hover:brightness-90',
      )}
    >
      {title}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'absolute left-0 mt-2 h-1',
          isMobile ? 'bg-primary-600' : 'bg-white',
        )}
      />
    </Link>
  );
};

export default NavLink;
