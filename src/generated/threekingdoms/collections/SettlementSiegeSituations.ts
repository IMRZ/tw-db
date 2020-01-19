
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeSituations {
  export const KEY = new CollectionKey("settlement_siege_situations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly situation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.situation = values["situation"];
    }
    
  }
}

export default SettlementSiegeSituations;
