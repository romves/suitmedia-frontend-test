'use server';

import { apiFetch } from '@/shared/lib/api/api';
import { BackendResponse } from '@/shared/lib/api/types';
import { IIdea } from '@/shared/types/ideas';
import { GetIdeasParams } from '../types';

export const getIdeas = async ({
  pageNumber,
  pageSize,
  sortBy,
}: GetIdeasParams) => {
  const { data, message, success, error } = await apiFetch<
    BackendResponse<IIdea[]>
  >({
    url: `${API_BASE_URL}/ideas?page[number]=${pageNumber}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sortBy}`,
  });

  return {
    ...data,
    message,
    success,
    error,
  };
};

const API_BASE_URL = 'https://suitmedia-backend.suitdev.com/api';
