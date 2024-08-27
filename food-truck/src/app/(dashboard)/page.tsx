import { ReactNode } from 'react';
import FoodTrackTable from './food-track-table';



export default function Page({
  children
}: {
  children: ReactNode;
}) {
  return (
    <FoodTrackTable />
  );
}
