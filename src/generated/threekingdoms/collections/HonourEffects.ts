
import { CollectionCache, CollectionKey } from "../../../common";
import { HonourFactors } from "./HonourFactors";

export namespace HonourEffects {
  export const KEY = new CollectionKey("honour_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _factor: string;
    readonly value: number;
    readonly appliesToAi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._factor = values["factor"];
      this.value = values["value"];
      this.appliesToAi = !!values["applies_to_ai"];
    }
    
    get factor(): HonourFactors.Entry | undefined {
      const collection = <HonourFactors.Entry[]>this.collectionCache.getCollection(HonourFactors.KEY, HonourFactors.Entry);
      return collection.find(entry => entry.key === this._factor);
    }
  }
}

export default HonourEffects;
