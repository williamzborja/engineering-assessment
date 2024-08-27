import { Suspense } from 'react';
import FoodTrackTable from './food-track-table';

type Props = { searchParams: { q?: string, page?: number } };

export default async function Page({ searchParams }: Props) {
  const query = searchParams.q?.trim().toLowerCase() || '';
  const page = Number(searchParams.page) || 0;
  return (
    <div>
      <div className='flex justify-between my-4 '>
        <div>

        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FoodTrackTable query={query} page={page} />
      </Suspense>
    </div>

  );
}
