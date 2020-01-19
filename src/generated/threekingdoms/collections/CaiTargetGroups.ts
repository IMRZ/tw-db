
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiTargetGroups {
  export const KEY = new CollectionKey("cai_target_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiTargetGroups;
