import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getFoodTrucks(query: string, take: number, skip: number = 0) {

    const query_db: Prisma.MobileFoodFacilityPermitFindManyArgs = {
        take,
        skip,
        select: {
            id: true,
            Applicant: true,
            Status: true,
            FacilityType: true,
            permit: true,
        },
        where: {
            OR: [
                {
                    Applicant: {
                        contains: query
                    }
                },
                {
                    FacilityType: {
                        startsWith: query
                    }
                },
                {
                    permit: {
                        contains: query
                    }
                },
                {
                    Status: {
                        contains: query
                    }
                }
            ]
        }
    };

    return prisma.$transaction([
        prisma.mobileFoodFacilityPermit.findMany(query_db),
        prisma.mobileFoodFacilityPermit.count({ where: query_db.where })
    ]);

}