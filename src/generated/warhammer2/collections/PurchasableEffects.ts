
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PurchasableEffects {
  export const KEY = new CollectionKey("purchasable_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default PurchasableEffects;
