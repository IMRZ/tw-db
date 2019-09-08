
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AncillariesCategories {
  export const KEY = new CollectionKey("ancillaries_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;
    readonly onscreenName: string;
    readonly iconName: string;
    readonly sortOrder: number;
    readonly defaultEntryName: string;
    readonly defaultEntryTooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
      this.onscreenName = values["onscreen_name"];
      this.iconName = values["icon_name"];
      this.sortOrder = values["sort_order"];
      this.defaultEntryName = values["default_entry_name"];
      this.defaultEntryTooltip = values["default_entry_tooltip"];
    }
    
  }
}

export default AncillariesCategories;
