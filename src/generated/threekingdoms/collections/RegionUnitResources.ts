
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegionUnitResources {
  export const KEY = new CollectionKey("region_unit_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly string: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.string = values["string"];
    }
    
  }
}

export default RegionUnitResources;
