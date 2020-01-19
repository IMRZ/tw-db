
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignGroupRegionalFactionSupports {
  export const KEY = new CollectionKey("campaign_group_regional_faction_supports");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly ownerSupportPerRound: number;
    readonly emergentFactionSupportAmount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this.ownerSupportPerRound = values["owner_support_per_round"];
      this.emergentFactionSupportAmount = values["emergent_faction_support_amount"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default CampaignGroupRegionalFactionSupports;
