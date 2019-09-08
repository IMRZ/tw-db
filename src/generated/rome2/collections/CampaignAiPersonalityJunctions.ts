
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiPersonalities } from "./CampaignAiPersonalities";
import { CampaignAiPersonalityProperties } from "./CampaignAiPersonalityProperties";

export namespace CampaignAiPersonalityJunctions {
  export const KEY = new CollectionKey("campaign_ai_personality_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _personality: string;
    readonly _property: string;
    readonly propertyValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._personality = values["personality"];
      this._property = values["property"];
      this.propertyValue = values["property_value"];
    }
    
    get personality(): CampaignAiPersonalities.Entry | undefined {
      const collection = <CampaignAiPersonalities.Entry[]>this.collectionCache.getCollection(CampaignAiPersonalities.KEY, CampaignAiPersonalities.Entry);
      return collection.find(entry => entry.personality === this._personality);
    }
    
    get property(): CampaignAiPersonalityProperties.Entry | undefined {
      const collection = <CampaignAiPersonalityProperties.Entry[]>this.collectionCache.getCollection(CampaignAiPersonalityProperties.KEY, CampaignAiPersonalityProperties.Entry);
      return collection.find(entry => entry.property === this._property);
    }
  }
}

export default CampaignAiPersonalityJunctions;
