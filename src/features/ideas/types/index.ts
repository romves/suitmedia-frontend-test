export interface GetIdeasParams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: sortOptions;
}

export type sortOptions = '-published_at' | 'published_at';
