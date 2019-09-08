import * as path from "path";
import * as dotenv from "dotenv";

function getDbPaths(): { [key: string]: string } {
  const pathToEnvLocal = path.resolve(__dirname, "../.env");
  const result = dotenv.config({ path: pathToEnvLocal });

  if (result.error) {
    throw new Error(result.error);
  } else {
    return {
      rome2: process.env.PATH_TO_ROME2_DB,
      warhammer2: process.env.PATH_TO_WARHAMMER2_DB
    };
  }
}

import { createInstanceWarhammer2 } from "../src";

describe("tww-db", () => {
  const { warhammer2: wh2DbPath } = getDbPaths();

  it("should load Abilities from wh2", () => {
    const wh2Db = createInstanceWarhammer2(wh2DbPath);

    const abilityCategoryOnscreenName = wh2Db.abilities[0].category

    expect(abilityCategoryOnscreenName).toBeDefined();
  });
});
