
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Plagues } from "./Plagues";

export namespace CampaignGroupPlagues {
  export const KEY = new CollectionKey("campaign_group_plagues");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _plague: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._plague = values["plague"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get plague(): Plagues.Entry | undefined {
      const collection = <Plagues.Entry[]>this.collectionCache.getCollection(Plagues.KEY, Plagues.Entry);
      return collection.find(entry => entry.name === this._plague);
    }
  }
}

export default CampaignGroupPlagues;
