import { IImage } from '../lib/api/types';

export interface IIdea {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;

  small_image: IImage;
  medium_image: IImage;
}
