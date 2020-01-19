
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemCategoryGroups } from "./CaiConstructionSystemCategoryGroups";
import { CdirMilitaryGeneratorUnitGroups } from "./CdirMilitaryGeneratorUnitGroups";

export namespace CaiConstructionSystemCategories {
  export const KEY = new CollectionKey("cai_construction_system_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _caiConstructionSystemCategoryGroup: string;
    readonly _cdirMilitaryGeneratorUnitGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._caiConstructionSystemCategoryGroup = values["cai_construction_system_category_group"];
      this._cdirMilitaryGeneratorUnitGroup = values["cdir_military_generator_unit_group"];
    }
    
    get caiConstructionSystemCategoryGroup(): CaiConstructionSystemCategoryGroups.Entry | undefined {
      const collection = <CaiConstructionSystemCategoryGroups.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemCategoryGroups.KEY, CaiConstructionSystemCategoryGroups.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemCategoryGroup);
    }
    
    get cdirMilitaryGeneratorUnitGroup(): CdirMilitaryGeneratorUnitGroups.Entry | undefined {
      const collection = <CdirMilitaryGeneratorUnitGroups.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorUnitGroups.KEY, CdirMilitaryGeneratorUnitGroups.Entry);
      return collection.find(entry => entry.key === this._cdirMilitaryGeneratorUnitGroup);
    }
  }
}

export default CaiConstructionSystemCategories;
