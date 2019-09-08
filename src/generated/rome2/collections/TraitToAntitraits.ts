
import { CollectionCache, CollectionKey } from "../../../common";
import { TraitInfo } from "./TraitInfo";

export namespace TraitToAntitraits {
  export const KEY = new CollectionKey("trait_to_antitraits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _trait: string;
    readonly _antitrait: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._trait = values["trait"];
      this._antitrait = values["antitrait"];
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
    
    get antitrait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._antitrait);
    }
  }
}

export default TraitToAntitraits;
