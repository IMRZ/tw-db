
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CustomLoadingScreens {
  export const KEY = new CollectionKey("custom_loading_screens");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly layoutName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.layoutName = values["layout_name"];
    }
    
  }
}

export default CustomLoadingScreens;
