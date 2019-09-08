
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AncillariesSubcategories {
  export const KEY = new CollectionKey("ancillaries_subcategories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly subcategory: string;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.subcategory = values["subcategory"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default AncillariesSubcategories;
