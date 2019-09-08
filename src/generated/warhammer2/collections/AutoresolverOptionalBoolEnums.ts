
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AutoresolverOptionalBoolEnums {
  export const KEY = new CollectionKey("autoresolver_optional_bool_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AutoresolverOptionalBoolEnums;
