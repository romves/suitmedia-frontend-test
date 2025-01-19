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

  return (
    <div className="mx-auto my-12">
      {meta.links.map((link, index) => {
        return (
          <Link
            key={index}
            href={buildLink(link.url as string)}
            className={cn(
              buttonVariants({
                variant: link.active ? 'default' : 'ghost',
              }),
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
