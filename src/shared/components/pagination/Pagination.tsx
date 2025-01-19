import { buttonVariants } from '@/shared/components/Button';
import { Meta } from '@/shared/lib/api/types';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const Pagination = ({ meta }: { meta: Meta }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buildLink = (link: string) => {
    if (!link) return `${pathname}?page=1`;
    const url = new URL(link);
    const pageParam = url.searchParams.get('page[number]');
    if (pageParam) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', pageParam);
      return `${pathname}?${newSearchParams.toString()}`;
    }
    return `${pathname}?page=1`;
  };

  const getVisibleLinks = () => {
    const totalPages = meta.links.length - 2; // Excluding prev and next
    const currentIndex = meta.links.findIndex((link) => link.active) - 1; // -1 to account for prev button

    if (totalPages <= 5) return meta.links;

    const visibleLinks = [meta.links[0]]; // Start with prev

    // Always show first page
    visibleLinks.push(meta.links[1]);

    // Logic for middle pages
    if (currentIndex <= 3) {
      // Near start
      visibleLinks.push(
        meta.links[2],
        meta.links[3],
        meta.links[4],
        meta.links[5],
      );
      visibleLinks.push({ label: '...', url: '', active: false });
    } else if (currentIndex >= totalPages - 3) {
      // Near end
      visibleLinks.push({ label: '...', url: '', active: false });
      visibleLinks.push(
        meta.links[totalPages - 3],
        meta.links[totalPages - 2],
        meta.links[totalPages - 1],
        meta.links[totalPages],
      );
    } else {
      // Middle - show current page and one page before and after
      visibleLinks.push({ label: '...', url: '', active: false });
      visibleLinks.push(
        meta.links[currentIndex - 1],
        meta.links[currentIndex],
        meta.links[currentIndex + 1],
        meta.links[currentIndex + 2],
      );
      visibleLinks.push({ label: '...', url: '', active: false });
    }

    // Always show last page if not already included
    if (currentIndex < totalPages - 3) {
      visibleLinks.push(meta.links[totalPages]);
    }
    // Add next button
    visibleLinks.push(meta.links[meta.links.length - 1]);

    return visibleLinks;
  };

  const visibleLinks = getVisibleLinks();

  return (
    <div className="mx-auto my-12 flex flex-wrap items-center justify-center gap-1">
      {visibleLinks.map((link, index) => {
        if (link.label === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2">
              ...
            </span>
          );
        }

        return (
          <Link
            key={index}
            href={buildLink(link.url as string)}
            className={cn(
              buttonVariants({
                variant: link.active ? 'default' : 'ghost',
              }),
              'min-w-[40px]',
            )}
            dangerouslySetInnerHTML={{
              __html: link.label.replace(/Previous|Next/g, ''),
            }}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
