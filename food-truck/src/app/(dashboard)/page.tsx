import { ReactNode } from 'react';
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
    <FoodTrackTable />
  );
}
