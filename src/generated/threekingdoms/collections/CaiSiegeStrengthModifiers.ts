
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CaiSiegeStrengthModifiers {
  export const KEY = new CollectionKey("cai_siege_strength_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subculture: string;
    readonly defenceStrengthModifier: number;
    readonly assaultStrengthModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subculture = values["subculture"];
      this.defenceStrengthModifier = values["defence_strength_modifier"];
      this.assaultStrengthModifier = values["assault_strength_modifier"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default CaiSiegeStrengthModifiers;
