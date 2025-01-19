'use client';

import Skeleton from '@/shared/components/skeleton';
import { Pagination } from '@/shared/components/pagination';
import { PerPageFilter, SortByFilter } from '@/shared/filter';

import { useIdeasQuery } from '../action/query';
import IdeasList from '../components/IdeasList';
import { sortOptions } from '../types';

interface HomeContainerProps {
  page?: string;
  perPage?: string;
  sortBy?: string;
}

export default function HomeContainer({
  searchParams,
}: {
  searchParams: HomeContainerProps;
}) {
  const { page, perPage, sortBy } = searchParams;

  const { data: ideas, isLoading } = useIdeasQuery({
    pageNumber: page ? parseInt(page) : 1,
    pageSize: perPage ? parseInt(perPage) : 10,
    sortBy: (sortBy as sortOptions) || '-published_at',
  });

  return (
    <div className="layout">
      <div className="flex flex-col items-end gap-y-2 lg:flex-row lg:items-center">
        <div className="flex items-center gap-2">
          Showing{' '}
          {isLoading ? <Skeleton className="size-5" /> : ideas?.meta?.from} -{' '}
          {isLoading ? <Skeleton className="size-5" /> : ideas?.meta?.to} of{' '}
          {isLoading ? <Skeleton className="size-5" /> : ideas?.meta?.total}
        </div>

        <div className="ml-auto grid grid-cols-2 md:flex">
          <PerPageFilter perPage={perPage} />
          <SortByFilter className="ml-3" sortBy={sortBy} />
        </div>
      </div>

      <div className="mt-4 flex flex-col md:mt-12">
        {ideas?.error && <div>{ideas.error}</div>}

        <IdeasList isLoading={isLoading} ideas={ideas?.data} />
        {ideas?.meta && <Pagination meta={ideas.meta} />}
      </div>
    </div>
  );
}
