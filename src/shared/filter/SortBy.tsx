import MdiSort from '@/shared/components/icon/MdiSort';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { useIsMobile } from '@/shared/hooks/use-mobile';
import { cn } from '@/shared/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

const SortByFilter = ({
  className,
  sortBy,
}: {
  className?: string;
  sortBy?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const handleSortByChange = (value: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('sortBy', value);
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {isMobile ? (
        <MdiSort className="size-8 text-neutral-800/70" />
      ) : (
        <p className="mr-2">Sort by:</p>
      )}
      <Select onValueChange={handleSortByChange}>
        <SelectTrigger className="w-[180px]" aria-label="Sort by">
          <SelectValue
            placeholder={sortBy === '-published_at' ? 'Newest' : 'Oldest'}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-published_at">Newest</SelectItem>
          <SelectItem value="published_at">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortByFilter;
