
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PoliticalTraits {
  export const KEY = new CollectionKey("political_traits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
    }
    
  }
}

export default PoliticalTraits;
