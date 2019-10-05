
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";

export namespace ElectorCountRegionToCapitalRegionJunctions {
  export const KEY = new CollectionKey("elector_count_region_to_capital_region_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _capitalRegion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._capitalRegion = values["capital_region"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get capitalRegion(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._capitalRegion);
    }
  }
}

export default ElectorCountRegionToCapitalRegionJunctions;
