import * as Rome2 from "./generated/rome2";
import * as Warhammer2 from "./generated/warhammer2";
import * as ThreeKingdoms from "./generated/warhammer2";

export function createInstanceRome2(pathToDbDir: string) {
  return new Rome2.Database(pathToDbDir);
}

export function createInstanceWarhammer2(pathToDbDir: string) {
  return new Warhammer2.Database(pathToDbDir);
}

export function createInstanceThreeKingdoms(pathToDbDir: string) {
  return new ThreeKingdoms.Database(pathToDbDir);
}
