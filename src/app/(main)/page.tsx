import HomeContainer from '@/features/ideas/container/HomeContainer';

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedParams = await searchParams;

  const params = {
    page: (resolvedParams.page as string) || '1',
    perPage: (resolvedParams.perPage as string) || '10',
    sortBy: (resolvedParams.sortBy as string) || '-published_at',
  };

  return <HomeContainer searchParams={params} />;
}
