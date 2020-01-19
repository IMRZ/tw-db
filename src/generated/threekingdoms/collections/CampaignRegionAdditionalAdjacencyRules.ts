
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";

export namespace CampaignRegionAdditionalAdjacencyRules {
  export const KEY = new CollectionKey("campaign_region_additional_adjacency_rules");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _firstRegion: string;
    readonly _secondRegion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._firstRegion = values["first_region"];
      this._secondRegion = values["second_region"];
    }
    
    get firstRegion(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._firstRegion);
    }
    
    get secondRegion(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._secondRegion);
    }
  }
}

export default CampaignRegionAdditionalAdjacencyRules;
