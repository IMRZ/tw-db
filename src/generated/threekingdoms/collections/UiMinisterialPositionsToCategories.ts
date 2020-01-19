
import { CollectionCache, CollectionKey } from "../../../common";
import { UiMinisterialPositions } from "./UiMinisterialPositions";
import { UiMinisterialPositionCategories } from "./UiMinisterialPositionCategories";

export namespace UiMinisterialPositionsToCategories {
  export const KEY = new CollectionKey("ui_ministerial_positions_to_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uiMinisterialPosition: string;
    readonly _category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uiMinisterialPosition = values["ui_ministerial_position"];
      this._category = values["category"];
    }
    
    get uiMinisterialPosition(): UiMinisterialPositions.Entry | undefined {
      const collection = <UiMinisterialPositions.Entry[]>this.collectionCache.getCollection(UiMinisterialPositions.KEY, UiMinisterialPositions.Entry);
      return collection.find(entry => entry.key === this._uiMinisterialPosition);
    }
    
    get category(): UiMinisterialPositionCategories.Entry | undefined {
      const collection = <UiMinisterialPositionCategories.Entry[]>this.collectionCache.getCollection(UiMinisterialPositionCategories.KEY, UiMinisterialPositionCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
  }
}

export default UiMinisterialPositionsToCategories;
