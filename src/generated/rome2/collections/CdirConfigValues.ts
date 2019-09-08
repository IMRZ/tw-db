
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirConfigValues {
  export const KEY = new CollectionKey("cdir_config_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CdirConfigValues;
