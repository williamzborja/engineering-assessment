import prisma from "@/lib/db";

describe("db", () => {
    it("should work", async () => {
        const foodTrucks = await prisma.mobileFoodFacilityPermit.count();
        console.log(foodTrucks);
        expect(foodTrucks).toBeGreaterThan(0);
    });
}
);