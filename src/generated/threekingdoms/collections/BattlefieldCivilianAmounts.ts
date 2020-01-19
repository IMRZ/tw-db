
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldCivilianAmounts {
  export const KEY = new CollectionKey("battlefield_civilian_amounts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly amount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.amount = values["amount"];
    }
    
  }
}

export default BattlefieldCivilianAmounts;
