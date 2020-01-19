
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyCategories } from "./TechnologyCategories";
import { UiColours } from "./UiColours";

export namespace TechnologyCategoryUiColours {
  export const KEY = new CollectionKey("technology_category_ui_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technologyCategory: string;
    readonly _researchedColour: string;
    readonly _unresearchedColour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technologyCategory = values["technology_category"];
      this._researchedColour = values["researched_colour"];
      this._unresearchedColour = values["unresearched_colour"];
    }
    
    get technologyCategory(): TechnologyCategories.Entry | undefined {
      const collection = <TechnologyCategories.Entry[]>this.collectionCache.getCollection(TechnologyCategories.KEY, TechnologyCategories.Entry);
      return collection.find(entry => entry.key === this._technologyCategory);
    }
    
    get researchedColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._researchedColour);
    }
    
    get unresearchedColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._unresearchedColour);
    }
  }
}

export default TechnologyCategoryUiColours;
