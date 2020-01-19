
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiSiegeItemDetails {
  export const KEY = new CollectionKey("ui_siege_item_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly description: string;
    readonly imagePath: string;
    readonly categoryImagePath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
      this.imagePath = values["image_path"];
      this.categoryImagePath = values["category_image_path"];
    }
    
  }
}

export default UiSiegeItemDetails;
