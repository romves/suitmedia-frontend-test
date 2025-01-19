import { useQuery } from '@tanstack/react-query';

import { getIdeas } from './service';
import { sortOptions } from '../types';

const queryKeys = {
  ideas: (pageNumber: number, pageSize: number, sortBy: sortOptions) => [
    'ideas',
    pageNumber,
    pageSize,
    sortBy,
  ],
};

export const useIdeasQuery = ({
  pageNumber = 1,
  pageSize = 10,
  sortBy = '-published_at' as sortOptions,
}) => {
  const ideasQuery = useQuery({
    queryKey: queryKeys.ideas(pageNumber, pageSize, sortBy),
    queryFn: () => getIdeas({ pageNumber, pageSize, sortBy }),
  });

  return ideasQuery;
};
