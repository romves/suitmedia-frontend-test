import NextImage from '@/shared/components/NextImage';
import { formatDate } from '@/shared/lib/date-formatter';
import { IIdea } from '@/shared/types/ideas';

const IdeasCard = ({ title, small_image, created_at }: IIdea) => {
  return (
    <div className="overflow-clip rounded-md bg-white shadow-md">
      <NextImage
        src={small_image.url ?? '/images/placeholder-image.png'}
        alt={title + '_image'}
        className="relative h-48 w-full"
        fill
        sizes="(max-width: 700px) 100vw, 700px"
        useSkeleton
        classNames={{
          image: 'object-cover',
        }}
      />

      <div className="p-4 pt-5">
        <p className="line-clamp-1 text-sm font-semibold uppercase text-neutral-500/80">
          {formatDate(created_at)}
        </p>
        <h2 className="mt-1 line-clamp-3 h-[76px] font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default IdeasCard;
