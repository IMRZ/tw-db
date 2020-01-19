
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { BattleAiProperties } from "./BattleAiProperties";

export namespace BattleAiPropertyCeoJunctions {
  export const KEY = new CollectionKey("battle_ai_property_ceo_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceo: string;
    readonly _property: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceo = values["ceo"];
      this._property = values["property"];
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
    
    get property(): BattleAiProperties.Entry | undefined {
      const collection = <BattleAiProperties.Entry[]>this.collectionCache.getCollection(BattleAiProperties.KEY, BattleAiProperties.Entry);
      return collection.find(entry => entry.property === this._property);
    }
  }
}

export default BattleAiPropertyCeoJunctions;
