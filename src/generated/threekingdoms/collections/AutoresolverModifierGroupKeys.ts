
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AutoresolverModifierGroupKeys {
  export const KEY = new CollectionKey("autoresolver_modifier_group_keys");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupKey = values["group_key"];
    }
    
  }
}

export default AutoresolverModifierGroupKeys;
