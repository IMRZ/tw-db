
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { FrontendCampaignSelectionMapPins } from "./FrontendCampaignSelectionMapPins";
import { Campaigns } from "./Campaigns";

export namespace FrontendFactionLeadersToFrontendCampaignSelectionMapPinsJunctions {
  export const KEY = new CollectionKey("frontend_faction_leaders_to_frontend_campaign_selection_map_pins_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _frontendFactionLeader: string;
    readonly _frontendCampaignSelectionMapPin: string;
    readonly localisedDescription: string;
    readonly _campaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._frontendFactionLeader = values["frontend_faction_leader"];
      this._frontendCampaignSelectionMapPin = values["frontend_campaign_selection_map_pin"];
      this.localisedDescription = values["localised_description"];
      this._campaignKey = values["campaign_key"];
    }
    
    get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._frontendFactionLeader);
    }
    
    get frontendCampaignSelectionMapPin(): FrontendCampaignSelectionMapPins.Entry | undefined {
      const collection = <FrontendCampaignSelectionMapPins.Entry[]>this.collectionCache.getCollection(FrontendCampaignSelectionMapPins.KEY, FrontendCampaignSelectionMapPins.Entry);
      return collection.find(entry => entry.key === this._frontendCampaignSelectionMapPin);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default FrontendFactionLeadersToFrontendCampaignSelectionMapPinsJunctions;
