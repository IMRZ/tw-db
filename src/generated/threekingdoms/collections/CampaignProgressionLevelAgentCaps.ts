
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
import { Agents } from "./Agents";

export namespace CampaignProgressionLevelAgentCaps {
  export const KEY = new CollectionKey("campaign_progression_level_agent_caps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignProgressionLevel: string;
    readonly _agent: string;
    readonly providedCap: number;
    readonly maximumCap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignProgressionLevel = values["campaign_progression_level"];
      this._agent = values["agent"];
      this.providedCap = values["provided_cap"];
      this.maximumCap = values["maximum_cap"];
    }
    
    get campaignProgressionLevel(): CampaignProgressionLevelDetails.Entry | undefined {
      const collection = <CampaignProgressionLevelDetails.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelDetails.KEY, CampaignProgressionLevelDetails.Entry);
      return collection.find(entry => entry.key === this._campaignProgressionLevel);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default CampaignProgressionLevelAgentCaps;
