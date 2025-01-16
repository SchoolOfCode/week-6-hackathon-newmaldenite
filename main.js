import { zone1Stations } from "./data.js";

export function isStationUnderground() {
        const stationsWithNullRepair = [];
        for (const station in zone1Stations) {
          // Attempt to check if RoofRepair is null directly
          if (zone1Stations[station]?.Information?.RoofRepair === null) {
            stationsWithNullRepair.push(station);
          }
        }
        return stationsWithNullRepair;
}

