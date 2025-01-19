import Skeleton from '@/shared/components/skeleton';

const IdeasCardSkeleton = () => {
  return (
    <div className="overflow-clip rounded-md bg-white shadow-md">
      <Skeleton className="h-48 w-full" />

      <div className="p-4 pt-5">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="mt-1 h-14 w-full" />
      </div>
    </div>
  );
};

export default IdeasCardSkeleton;
