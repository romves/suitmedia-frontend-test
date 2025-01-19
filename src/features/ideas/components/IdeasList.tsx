'use client';

import { IIdea } from '@/shared/types/ideas';
import IdeasCard from './card/IdeasCard';
import IdeasCardSkeleton from './card/IdeasCardSkeleton';

interface IIdeasListProps {
  isLoading: boolean;
  ideas?: IIdea[];
}

const IdeasList = ({ isLoading, ideas }: IIdeasListProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4">
      {isLoading
        ? Array.from({ length: 10 }).map((_, index) => (
            <IdeasCardSkeleton key={index} />
          ))
        : ideas?.map((idea) => <IdeasCard key={idea.id} {...idea} />)}
    </div>
  );
};

export default IdeasList;
