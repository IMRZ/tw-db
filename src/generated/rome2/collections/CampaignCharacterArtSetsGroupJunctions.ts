
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSetsCampaignGroups } from "./CampaignCharacterArtSetsCampaignGroups";
import { Campaigns } from "./Campaigns";

export namespace CampaignCharacterArtSetsGroupJunctions {
  export const KEY = new CollectionKey("campaign_character_art_sets_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._campaign = values["campaign"];
    }
    
    get group(): CampaignCharacterArtSetsCampaignGroups.Entry | undefined {
      const collection = <CampaignCharacterArtSetsCampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSetsCampaignGroups.KEY, CampaignCharacterArtSetsCampaignGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignCharacterArtSetsGroupJunctions;
