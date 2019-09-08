
import { CollectionCache, CollectionKey } from "../../../common";
import { BretonniaVows } from "./BretonniaVows";
import { CharacterTraits } from "./CharacterTraits";

export namespace BretonniaVowsToTraits {
  export const KEY = new CollectionKey("bretonnia_vows_to_traits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _vow: string;
    readonly _trait: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._vow = values["vow"];
      this._trait = values["trait"];
      this.order = values["order"];
    }
    
    get vow(): BretonniaVows.Entry | undefined {
      const collection = <BretonniaVows.Entry[]>this.collectionCache.getCollection(BretonniaVows.KEY, BretonniaVows.Entry);
      return collection.find(entry => entry.key === this._vow);
    }
    
    get trait(): CharacterTraits.Entry | undefined {
      const collection = <CharacterTraits.Entry[]>this.collectionCache.getCollection(CharacterTraits.KEY, CharacterTraits.Entry);
      return collection.find(entry => entry._key === this._trait);
    }
  }
}

export default BretonniaVowsToTraits;
