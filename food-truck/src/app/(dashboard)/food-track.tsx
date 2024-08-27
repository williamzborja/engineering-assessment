import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';
import { MobileFoodFacilityPermit } from '@prisma/client';
import { MoreHorizontal } from 'lucide-react';

interface Props {
    foodTruck: Partial<MobileFoodFacilityPermit>;
}

export default function FoodTrack({ foodTruck }: Props) {
    return (
        <TableRow>
            <TableCell className="font-medium">{foodTruck.Applicant}</TableCell>
            <TableCell>
                <Badge variant="outline" className="capitalize">
                    {foodTruck.Status}
                </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{foodTruck.FacilityType}</TableCell>
            <TableCell className="hidden md:table-cell">{foodTruck.permit}</TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            {/* <span className="sr-only">Toggle menu</span> */}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
}