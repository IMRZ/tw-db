
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FontNames {
  export const KEY = new CollectionKey("font_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly fontName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.fontName = values["font_name"];
    }
    
  }
}

export default FontNames;
