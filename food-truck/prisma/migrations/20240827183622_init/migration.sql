-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MobileFoodFacilityPermit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "locationid" INTEGER NOT NULL,
    "Applicant" TEXT NOT NULL,
    "FacilityType" TEXT NOT NULL,
    "cnn" INTEGER NOT NULL,
    "LocationDescription" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "blocklot" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "lot" TEXT NOT NULL,
    "permit" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "FoodItems" TEXT NOT NULL,
    "X" TEXT NOT NULL,
    "Y" TEXT NOT NULL,
    "Latitude" REAL NOT NULL,
    "Longitude" REAL NOT NULL,
    "Schedule" TEXT,
    "dayshours" TEXT,
    "NOISent" TEXT,
    "Approved" TEXT,
    "Received" TEXT,
    "PriorPermit" INTEGER NOT NULL,
    "ExpirationDate" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "FirePreventionDistricts" INTEGER,
    "PoliceDistricts" INTEGER NOT NULL,
    "SupervisorDistricts" INTEGER NOT NULL,
    "ZipCodes" INTEGER NOT NULL,
    "NeighborhoodsOld" INTEGER NOT NULL
);
INSERT INTO "new_MobileFoodFacilityPermit" ("Address", "Applicant", "Approved", "ExpirationDate", "FacilityType", "FirePreventionDistricts", "FoodItems", "Latitude", "Location", "LocationDescription", "Longitude", "NOISent", "NeighborhoodsOld", "PoliceDistricts", "PriorPermit", "Received", "Schedule", "Status", "SupervisorDistricts", "X", "Y", "ZipCodes", "block", "blocklot", "cnn", "dayshours", "id", "locationid", "lot", "permit") SELECT "Address", "Applicant", "Approved", "ExpirationDate", "FacilityType", "FirePreventionDistricts", "FoodItems", "Latitude", "Location", "LocationDescription", "Longitude", "NOISent", "NeighborhoodsOld", "PoliceDistricts", "PriorPermit", "Received", "Schedule", "Status", "SupervisorDistricts", "X", "Y", "ZipCodes", "block", "blocklot", "cnn", "dayshours", "id", "locationid", "lot", "permit" FROM "MobileFoodFacilityPermit";
DROP TABLE "MobileFoodFacilityPermit";
ALTER TABLE "new_MobileFoodFacilityPermit" RENAME TO "MobileFoodFacilityPermit";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
