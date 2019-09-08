
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { RitualChains } from "./RitualChains";

export namespace RitualsToRitualChains {
  export const KEY = new CollectionKey("rituals_to_ritual_chains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly _chain: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this._chain = values["chain"];
      this.order = values["order"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
    
    get chain(): RitualChains.Entry | undefined {
      const collection = <RitualChains.Entry[]>this.collectionCache.getCollection(RitualChains.KEY, RitualChains.Entry);
      return collection.find(entry => entry.key === this._chain);
    }
  }
}

export default RitualsToRitualChains;
