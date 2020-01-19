
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { WorldPowerTokenCaptureOutcomes } from "./WorldPowerTokenCaptureOutcomes";

export namespace CampaignGroupWorldPowerTokenCaptureOutcomes {
  export const KEY = new CollectionKey("campaign_group_world_power_token_capture_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _outcome: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._outcome = values["outcome"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get outcome(): WorldPowerTokenCaptureOutcomes.Entry | undefined {
      const collection = <WorldPowerTokenCaptureOutcomes.Entry[]>this.collectionCache.getCollection(WorldPowerTokenCaptureOutcomes.KEY, WorldPowerTokenCaptureOutcomes.Entry);
      return collection.find(entry => entry.key === this._outcome);
    }
  }
}

export default CampaignGroupWorldPowerTokenCaptureOutcomes;
