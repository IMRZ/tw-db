
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { Campaigns } from "./Campaigns";

export namespace ResourcesToCampaignJunctions {
  export const KEY = new CollectionKey("resources_to_campaign_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resource: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resource = values["resource"];
      this._campaign = values["campaign"];
    }
    
    get resource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default ResourcesToCampaignJunctions;
