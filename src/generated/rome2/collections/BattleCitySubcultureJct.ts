
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { BattleCities } from "./BattleCities";

export namespace BattleCitySubcultureJct {
  export const KEY = new CollectionKey("battle_city_subculture_jct");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subculture: string;
    readonly _city: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subculture = values["subculture"];
      this._city = values["city"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get city(): BattleCities.Entry | undefined {
      const collection = <BattleCities.Entry[]>this.collectionCache.getCollection(BattleCities.KEY, BattleCities.Entry);
      return collection.find(entry => entry.city === this._city);
    }
  }
}

export default BattleCitySubcultureJct;
