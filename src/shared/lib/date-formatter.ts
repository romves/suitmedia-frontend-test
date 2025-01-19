import { format } from 'date-fns';
import { id } from 'date-fns/locale/id';

export const formatDate = (date: string): string => {
  return format(new Date(date), 'd MMMM yyyy', { locale: id });
};
