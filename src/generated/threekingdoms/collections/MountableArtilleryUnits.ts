
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace MountableArtilleryUnits {
  export const KEY = new CollectionKey("mountable_artillery_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitKey = values["unit_key"];
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
  }
}

export default MountableArtilleryUnits;
