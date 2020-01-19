
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiTaggedImages {
  export const KEY = new CollectionKey("ui_tagged_images");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly imagePath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.imagePath = values["image_path"];
    }
    
  }
}

export default UiTaggedImages;
