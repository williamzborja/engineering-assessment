
import FoodTrackTable from './food-track-table';
import prisma from '@/lib/db';


export default async function Page({
  children
}: {
  children: ReactNode;
}) {
  const foodTrucks = await prisma.mobileFoodFacilityPermit.count();

  console.log(foodTrucks);
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
