
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
import { UiUnitStats } from "./UiUnitStats";
import { UiUnitBulletPointEnums } from "./UiUnitBulletPointEnums";

export namespace UiUnitBulletPointsGenerations {
  export const KEY = new CollectionKey("ui_unit_bullet_points_generations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitClass: string;
    readonly _unitStat: string;
    readonly unitStatThreshold: number;
    readonly _bulletPointEnum: string;
    readonly _textOverride: string;
    readonly shouldDisplay: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitClass = values["unit_class"];
      this._unitStat = values["unit_stat"];
      this.unitStatThreshold = values["unit_stat_threshold"];
      this._bulletPointEnum = values["bullet_point_enum"];
      this._textOverride = values["text_override"];
      this.shouldDisplay = !!values["should_display"];
    }
    
    get unitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._unitClass);
    }
    
    get unitStat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._unitStat);
    }
    
    get bulletPointEnum(): UiUnitBulletPointEnums.Entry | undefined {
      const collection = <UiUnitBulletPointEnums.Entry[]>this.collectionCache.getCollection(UiUnitBulletPointEnums.KEY, UiUnitBulletPointEnums.Entry);
      return collection.find(entry => entry.key === this._bulletPointEnum);
    }
    
    get textOverride(): UiUnitBulletPointEnums.Entry | undefined {
      const collection = <UiUnitBulletPointEnums.Entry[]>this.collectionCache.getCollection(UiUnitBulletPointEnums.KEY, UiUnitBulletPointEnums.Entry);
      return collection.find(entry => entry.key === this._textOverride);
    }
  }
}

export default UiUnitBulletPointsGenerations;
