
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirMilitaryGeneratorUnitGroups } from "./CdirMilitaryGeneratorUnitGroups";
import { MainUnits } from "./MainUnits";

export namespace CdirMilitaryGeneratorUnitQualities {
  export const KEY = new CollectionKey("cdir_military_generator_unit_qualities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groupKey: string;
    readonly _unitKey: string;
    readonly quality: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groupKey = values["group_key"];
      this._unitKey = values["unit_key"];
      this.quality = values["quality"];
    }
    
    get groupKey(): CdirMilitaryGeneratorUnitGroups.Entry | undefined {
      const collection = <CdirMilitaryGeneratorUnitGroups.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorUnitGroups.KEY, CdirMilitaryGeneratorUnitGroups.Entry);
      return collection.find(entry => entry.key === this._groupKey);
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
  }
}

export default CdirMilitaryGeneratorUnitQualities;
