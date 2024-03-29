
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UniqueAgents } from "./UniqueAgents";

export namespace CampaignGroupFoodUniqueAgentCharges {
  export const KEY = new CollectionKey("campaign_group_food_unique_agent_charges");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _uniqueAgent: string;
    readonly charges: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._uniqueAgent = values["unique_agent"];
      this.charges = values["charges"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get uniqueAgent(): UniqueAgents.Entry | undefined {
      const collection = <UniqueAgents.Entry[]>this.collectionCache.getCollection(UniqueAgents.KEY, UniqueAgents.Entry);
      return collection.find(entry => entry._agentSubtype === this._uniqueAgent);
    }
  }
}

export default CampaignGroupFoodUniqueAgentCharges;
