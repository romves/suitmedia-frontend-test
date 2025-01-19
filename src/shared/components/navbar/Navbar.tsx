'use client';

import { useEffect, useState } from 'react';
import NextImage from '../NextImage';
import NavLink from './NavLink';
import { cn } from '@/shared/lib/utils';
import { useIsMobile } from '@/shared/hooks/use-mobile';
import { navLinkList } from './constant/navlink-list';
import HamburgerButton from './HamburgerButton';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // MOBILE
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  // END MOBILE

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollY(currentScrollPos);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="relative">
      <nav
        className={cn(
          'fixed z-50 h-20 w-full text-white transition-all duration-300',
          visible ? 'translate-y-0' : '-translate-y-full',
          scrollY > 20 ? 'bg-primary-600/80 backdrop-blur' : 'bg-primary-600',
        )}
      >
        <div className="layout flex h-full w-full items-center gap-4">
          <NextImage
            src="/logo/site-logo.webp"
            alt="Logo"
            width="100"
            height="80"
            className="flex-shrink-0 brightness-0 invert"
          />

          {isMobile ? (
            <HamburgerButton isActive={isOpen} onClick={toggleSidebar} />
          ) : (
            <div className="ml-auto flex h-full items-center gap-4">
              {navLinkList.map((navLink, index) => (
                <NavLink key={index} {...navLink} />
              ))}
            </div>
          )}
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-end border-b px-8">
            <HamburgerButton isActive={isOpen} onClick={toggleSidebar} />
          </div>

          <div className="flex flex-col gap-y-8 p-4">
            {navLinkList.map((navLink, index) => (
              <NavLink key={index} {...navLink} isMobile />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
