
import { CollectionCache, CollectionKey } from "../../../common";
import { TimeOfDayIntervals } from "./TimeOfDayIntervals";
import { PrefabTypes } from "./PrefabTypes";

export namespace TimeOfDayPrefabTypes {
  export const KEY = new CollectionKey("time_of_day_prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _timeOfDay: string;
    readonly _prefabType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._timeOfDay = values["time_of_day"];
      this._prefabType = values["prefab_type"];
    }
    
    get timeOfDay(): TimeOfDayIntervals.Entry | undefined {
      const collection = <TimeOfDayIntervals.Entry[]>this.collectionCache.getCollection(TimeOfDayIntervals.KEY, TimeOfDayIntervals.Entry);
      return collection.find(entry => entry.key === this._timeOfDay);
    }
    
    get prefabType(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabType);
    }
  }
}

export default TimeOfDayPrefabTypes;
