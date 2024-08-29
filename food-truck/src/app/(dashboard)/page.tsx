
import { Suspense } from 'react';
import FoodTrackTable from './food-track-table';

type Props = {
  searchParams: {
    q?: string;
    page?: number;
  };
};

export default async function Page({ searchParams: { q, page } }: Props) {
  const query = q ?? '';
  page = page ?? 0;
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FoodTrackTable query={query} page={page} />
      </Suspense>
    </div>

  );
}
