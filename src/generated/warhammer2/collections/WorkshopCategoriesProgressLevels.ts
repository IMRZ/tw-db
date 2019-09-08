
import { CollectionCache, CollectionKey } from "../../../common";
import { WorkshopCategories } from "./WorkshopCategories";
import { Ancillaries } from "./Ancillaries";
import { MainUnits } from "./MainUnits";

export namespace WorkshopCategoriesProgressLevels {
  export const KEY = new CollectionKey("workshop_categories_progress_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly levelToUnlock: number;
    readonly _ancillaryReward: string;
    readonly _unitReward: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this.levelToUnlock = values["level_to_unlock"];
      this._ancillaryReward = values["ancillary_reward"];
      this._unitReward = values["unit_reward"];
    }
    
    get category(): WorkshopCategories.Entry | undefined {
      const collection = <WorkshopCategories.Entry[]>this.collectionCache.getCollection(WorkshopCategories.KEY, WorkshopCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get ancillaryReward(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillaryReward);
    }
    
    get unitReward(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitReward);
    }
  }
}

export default WorkshopCategoriesProgressLevels;
