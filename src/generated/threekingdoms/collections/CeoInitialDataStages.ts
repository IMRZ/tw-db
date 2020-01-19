
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CeoInitialDataStages {
  export const KEY = new CollectionKey("ceo_initial_data_stages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CeoInitialDataStages;
