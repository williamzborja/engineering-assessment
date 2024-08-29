
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { nextPage, prevPage } from "@/lib/actions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFoodTrucks } from "../lib/service";
import FoodTrack from "./food-track";

type Props = { query: string, page: number };

export default async function FoodTrackTable({ query, page }: Props) {
    const pageItems = 7;
    let skip = 0;
    if (page > 1) {
        skip = pageItems * (page - 1);
    }

    const take = pageItems;
    const [foodTrucks, totalFoodTrucks] = await getFoodTrucks(query, take, skip);
    return (
        <Card className="bg-white">
            <CardHeader>
                <CardTitle>Food Trucks</CardTitle>
                <CardDescription className=" text-gray-500">
                    Manage your food trucks
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>

                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Permit</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            foodTrucks.map((foodTruck) => {
                                return <FoodTrack key={foodTruck.id} foodTruck={foodTruck} />;
                            })
                        }
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <form className="flex items-center w-full justify-between">
                    <div className="text-xs text-muted-foreground">
                        Showing{' '}
                        <strong>
                            {pageItems * (page - 1) + 1}
                        </strong>{' '}
                        of <strong>{totalFoodTrucks}</strong> food trucks
                    </div>
                    <div className="flex">
                        <Button
                            formAction={prevPage.bind(null, query, page, totalFoodTrucks)}
                            variant="ghost"
                            size="sm"
                            type="submit"
                            disabled={page <= 1}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Prev
                        </Button>
                        <Button
                            formAction={nextPage.bind(null, query, page, totalFoodTrucks)}
                            variant="ghost"
                            size="sm"
                            type="submit"
                            disabled={page * pageItems >= totalFoodTrucks}
                        >
                            Next
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </CardFooter>
        </Card>
    );
}