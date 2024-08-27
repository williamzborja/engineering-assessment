import fs from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const results: any[] = [];

  fs.createReadStream('../Mobile_Food_Facility_Permit.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {

        await prisma.mobileFoodFacilityPermit.create({
          data: {
            locationid: parseInt(row.locationid),
            Applicant: row.Applicant,
            FacilityType: row.FacilityType,
            cnn: parseInt(row.cnn),
            LocationDescription: row.LocationDescription,
            Address: row.Address,
            blocklot: row.blocklot,
            block: row.block,
            lot: row.lot,
            permit: row.permit,
            Status: row.Status,
            FoodItems: row.FoodItems,
            X: row.X,
            Y: row.Y,
            Latitude: parseFloat(row.Latitude),
            Longitude: parseFloat(row.Longitude),
            Schedule: row.Schedule || null,
            dayshours: row.dayshours || null,
            NOISent: row.NOISent || null,
            Approved: row.Approved,
            Received: row.Received || null,
            PriorPermit: parseInt(row.PriorPermit),
            ExpirationDate: row.ExpirationDate,
            Location: row.Location,
            FirePreventionDistricts: parseInt(row.FirePreventionDistricts),
            PoliceDistricts: parseInt(row.PoliceDistricts),
            SupervisorDistricts: parseInt(row.SupervisorDistricts),
            ZipCodes: parseInt(row.ZipCodes),
            NeighborhoodsOld: parseInt(row.NeighborhoodsOld),
          },
        });
      }
      console.log('Seed data inserted');
      await prisma.$disconnect();
    });
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});