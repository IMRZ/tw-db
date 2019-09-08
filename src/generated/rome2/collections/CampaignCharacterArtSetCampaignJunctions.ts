
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { Campaigns } from "./Campaigns";

export namespace CampaignCharacterArtSetCampaignJunctions {
  export const KEY = new CollectionKey("campaign_character_art_set_campaign_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _artSetId: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._artSetId = values["art_set_id"];
      this._campaign = values["campaign"];
    }
    
    get artSetId(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._artSetId);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignCharacterArtSetCampaignJunctions;
