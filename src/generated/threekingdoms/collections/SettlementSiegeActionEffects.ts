
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionEffects {
  export const KEY = new CollectionKey("settlement_siege_action_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly effects: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.effects = values["effects"];
    }
    
  }
}

export default SettlementSiegeActionEffects;
