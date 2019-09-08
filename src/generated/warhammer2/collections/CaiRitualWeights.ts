
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";

export namespace CaiRitualWeights {
  export const KEY = new CollectionKey("cai_ritual_weights");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this.weight = values["weight"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default CaiRitualWeights;
