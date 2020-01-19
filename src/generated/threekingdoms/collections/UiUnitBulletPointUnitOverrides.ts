
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { UiUnitBulletPointEnums } from "./UiUnitBulletPointEnums";

export namespace UiUnitBulletPointUnitOverrides {
  export const KEY = new CollectionKey("ui_unit_bullet_point_unit_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitKey: string;
    readonly _bulletPoint: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitKey = values["unit_key"];
      this._bulletPoint = values["bullet_point"];
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
    
    get bulletPoint(): UiUnitBulletPointEnums.Entry | undefined {
      const collection = <UiUnitBulletPointEnums.Entry[]>this.collectionCache.getCollection(UiUnitBulletPointEnums.KEY, UiUnitBulletPointEnums.Entry);
      return collection.find(entry => entry.key === this._bulletPoint);
    }
  }
}

export default UiUnitBulletPointUnitOverrides;
