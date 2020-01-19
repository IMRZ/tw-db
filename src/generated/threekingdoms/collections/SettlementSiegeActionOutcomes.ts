
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionOutcomes {
  export const KEY = new CollectionKey("settlement_siege_action_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly outcome: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.outcome = values["outcome"];
    }
    
  }
}

export default SettlementSiegeActionOutcomes;
