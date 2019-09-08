
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace UnitsCustomBattleMounts {
  export const KEY = new CollectionKey("units_custom_battle_mounts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _baseUnit: string;
    readonly _mountedUnit: string;
    readonly iconName: string;
    readonly mountName: string;
    readonly localisedDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._baseUnit = values["base_unit"];
      this._mountedUnit = values["mounted_unit"];
      this.iconName = values["icon_name"];
      this.mountName = values["mount_name"];
      this.localisedDescription = values["localised_description"];
    }
    
    get baseUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._baseUnit);
    }
    
    get mountedUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._mountedUnit);
    }
  }
}

export default UnitsCustomBattleMounts;
