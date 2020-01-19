
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleScoringProfiles {
  export const KEY = new CollectionKey("battle_scoring_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly timePeriodMin: number;
    readonly timePeriodMax: number;
    readonly timePeriodScore: number;
    readonly killUnitScore: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.timePeriodMin = values["time_period_min"];
      this.timePeriodMax = values["time_period_max"];
      this.timePeriodScore = values["time_period_score"];
      this.killUnitScore = values["kill_unit_score"];
    }
    
  }
}

export default BattleScoringProfiles;
