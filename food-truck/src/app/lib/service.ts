import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function getFoodTrucks(query: string, take: number, skip: number = 0) {
    query = query.trim().toLowerCase();

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
                        contains: query,
                        mode: 'insensitive'
                    }
                },
                {
                    FacilityType: {
                        startsWith: query,
                        mode: 'insensitive'
                    }
                },
                {
                    permit: {
                        contains: query,
                        mode: 'insensitive'
                    }
                },
                {
                    Status: {
                        contains: query,
                        mode: 'insensitive'
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