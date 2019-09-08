
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Variants {
  export const KEY = new CollectionKey("variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly variantName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.variantName = values["variant_name"];
    }
    
  }
}

export default Variants;
