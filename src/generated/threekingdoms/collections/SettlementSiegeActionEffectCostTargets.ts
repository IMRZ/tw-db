
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionEffectCostTargets {
  export const KEY = new CollectionKey("settlement_siege_action_effect_cost_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.target = values["target"];
    }
    
  }
}

export default SettlementSiegeActionEffectCostTargets;
