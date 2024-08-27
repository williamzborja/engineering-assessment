
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { TableHeader, TableRow, TableHead, TableBody, Table } from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FoodTrack from "./food-track";

export default function FoodTrackTable() {
    return (
        <Card>
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
                        <FoodTrack />
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <form className="flex items-center w-full justify-between">
                    <div className="text-xs text-muted-foreground">
                        Showing{' '}
                        <strong>
                        </strong>{' '}
                        of <strong>0</strong> food trucks
                    </div>
                    <div className="flex">
                        <Button
                            variant="ghost"
                            size="sm"
                            type="submit"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Prev
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            type="submit"
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