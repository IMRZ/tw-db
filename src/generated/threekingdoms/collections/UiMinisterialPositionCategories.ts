
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiMinisterialPositionCategories {
  export const KEY = new CollectionKey("ui_ministerial_position_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
    }
    
  }
}

export default UiMinisterialPositionCategories;
