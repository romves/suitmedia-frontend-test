import MdiFilterMinusOutline from '@/shared/components/icon/MdiFilterMinusOutline';
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

const PerPageFilter = ({
  className,
  perPage,
}: {
  className?: string;
  perPage?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const handlePerPageChange = (value: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('perPage', value);
    newSearchParams.set('page', '1'); // Reset page to 1
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {isMobile ? (
        <MdiFilterMinusOutline className="size-8 text-neutral-800/70" />
      ) : (
        <p>Show per page: &nbsp;</p>
      )}

      <Select onValueChange={handlePerPageChange}>
        <SelectTrigger className="w-[180px]" aria-label="Show per page">
          <SelectValue placeholder={perPage} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PerPageFilter;
