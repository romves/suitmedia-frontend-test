export interface ApiResponse<T> {
  data?: T;
  success: boolean;
  error?: string;
  message: string;
}

export interface Links {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface MetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface BackendResponse<T> {
  data: T;
  links: Links;
  meta: Meta;
}

export interface IImage {
  id: number;
  file_name: string;
  url: string;
  mime: string;
}
