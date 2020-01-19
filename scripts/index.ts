
import * as path from "path";
import * as dotenv from "dotenv";

import { generate } from "./generate";

function getDbPaths(): { [key: string]: string } {
  const pathToEnvLocal = path.resolve(__dirname, "../.env");
  const result = dotenv.config({ path: pathToEnvLocal });

  if (result.error) {
    throw new Error(result.error.message);
  } else {
    return {
      rome2: process.env.PATH_TO_ROME2_DB,
      warhammer2: process.env.PATH_TO_WARHAMMER2_DB,
      threekingdoms: process.env.PATH_TO_THREEKINGDOMS_DB
    };
  }
}

const gameDbPaths = getDbPaths();

Object.entries(gameDbPaths).forEach(([key, path]) => {
  generate(path, key);
});
