
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace UnitExperienceThresholdModifiers {
  export const KEY = new CollectionKey("unit_experience_threshold_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly modifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.modifier = values["modifier"];
    }
    
    get key(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._key);
    }
  }
}

export default UnitExperienceThresholdModifiers;
