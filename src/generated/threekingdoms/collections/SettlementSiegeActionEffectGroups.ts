
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionEffectGroups {
  export const KEY = new CollectionKey("settlement_siege_action_effect_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly effectGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.effectGroup = values["effect_group"];
    }
    
  }
}

export default SettlementSiegeActionEffectGroups;
