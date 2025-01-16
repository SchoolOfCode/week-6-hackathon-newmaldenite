import { it, expect } from "vitest"
import { zone1Stations } from "./data.js";
import { isStationUnderground } from "./main.js";

it("should return all stations with RoofRepair === null", () => {
    const result = isStationUnderground(zone1Stations);
    expect(result).toEqual([
        'Bank',
        'Chancery Lane',
        'Charing Cross',
        'Euston',
        'Hyde Park Corner',
        'Marylebone',
        'Piccadilly Circus',
        'Pimlico',
        "Regent's Park",
        "St. Paul's",
        'Vauxhall'
      ]);
  });