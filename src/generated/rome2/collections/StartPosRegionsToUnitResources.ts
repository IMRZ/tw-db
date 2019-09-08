
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { RegionUnitResources } from "./RegionUnitResources";

export namespace StartPosRegionsToUnitResources {
  export const KEY = new CollectionKey("start_pos_regions_to_unit_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: number;
    readonly _resource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._resource = values["resource"];
    }
    
    get key(): StartPosRegions.Entry | undefined {
      const collection = <StartPosRegions.Entry[]>this.collectionCache.getCollection(StartPosRegions.KEY, StartPosRegions.Entry);
      return collection.find(entry => entry.id === this._key);
    }
    
    get resource(): RegionUnitResources.Entry | undefined {
      const collection = <RegionUnitResources.Entry[]>this.collectionCache.getCollection(RegionUnitResources.KEY, RegionUnitResources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
  }
}

export default StartPosRegionsToUnitResources;
