
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingBenefitCategories } from "./BuildingBenefitCategories";

export namespace BuildingToBuildingBenefitJunctions {
  export const KEY = new CollectionKey("building_to_building_benefit_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _benefit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._benefit = values["benefit"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get benefit(): BuildingBenefitCategories.Entry | undefined {
      const collection = <BuildingBenefitCategories.Entry[]>this.collectionCache.getCollection(BuildingBenefitCategories.KEY, BuildingBenefitCategories.Entry);
      return collection.find(entry => entry.key === this._benefit);
    }
  }
}

export default BuildingToBuildingBenefitJunctions;
