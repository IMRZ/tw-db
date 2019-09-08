
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegionsSea {
  export const KEY = new CollectionKey("regions_sea");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly seaRegionKey: string;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.seaRegionKey = values["sea_region_key"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default RegionsSea;
