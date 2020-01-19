
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitStatLocalisations } from "./UnitStatLocalisations";

export namespace ModifiableUnitStats {
  export const KEY = new CollectionKey("modifiable_unit_stats");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly statKey: string;
    readonly _localisation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.statKey = values["stat_key"];
      this._localisation = values["localisation"];
    }
    
    get localisation(): UnitStatLocalisations.Entry | undefined {
      const collection = <UnitStatLocalisations.Entry[]>this.collectionCache.getCollection(UnitStatLocalisations.KEY, UnitStatLocalisations.Entry);
      return collection.find(entry => entry.statKey === this._localisation);
    }
  }
}

export default ModifiableUnitStats;
