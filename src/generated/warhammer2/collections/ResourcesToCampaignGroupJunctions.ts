
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { CampaignGroups } from "./CampaignGroups";

export namespace ResourcesToCampaignGroupJunctions {
  export const KEY = new CollectionKey("resources_to_campaign_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resource: string;
    readonly _campaignGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resource = values["resource"];
      this._campaignGroup = values["campaign_group"];
    }
    
    get resource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default ResourcesToCampaignGroupJunctions;
