
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPools } from "./MercenaryPools";

export namespace VampireMercenarySetJunctions {
  export const KEY = new CollectionKey("vampire_mercenary_set_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mercenarySet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mercenarySet = values["mercenary_set"];
    }
    
    get mercenarySet(): MercenaryPools.Entry | undefined {
      const collection = <MercenaryPools.Entry[]>this.collectionCache.getCollection(MercenaryPools.KEY, MercenaryPools.Entry);
      return collection.find(entry => entry.key === this._mercenarySet);
    }
  }
}

export default VampireMercenarySetJunctions;
