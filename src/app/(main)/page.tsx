import HomeContainer from '@/features/ideas/container/HomeContainer';

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const { page, perPage, sortBy } = await searchParams;

  const params = {
    page: page ? page : '1',
    perPage: perPage ? perPage : '10',
    sortBy: sortBy || '-published_at',
  };

  return <HomeContainer searchParams={params} />;
}
