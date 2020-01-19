
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleDuelOutcomes {
  export const KEY = new CollectionKey("battle_duel_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly outcomeType: string;
    readonly effectsAppliedForHistorical: boolean;
    readonly adcDisplayedForHistorical: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.outcomeType = values["outcome_type"];
      this.effectsAppliedForHistorical = !!values["effects_applied_for_historical"];
      this.adcDisplayedForHistorical = !!values["adc_displayed_for_historical"];
    }
    
  }
}

export default BattleDuelOutcomes;
