
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ModelsMount {
  export const KEY = new CollectionKey("models_mount");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ModelsMount;
