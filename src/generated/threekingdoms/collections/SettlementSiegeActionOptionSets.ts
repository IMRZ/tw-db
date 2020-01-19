
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionOptionSets {
  export const KEY = new CollectionKey("settlement_siege_action_option_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly set: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.set = values["set"];
    }
    
  }
}

export default SettlementSiegeActionOptionSets;
