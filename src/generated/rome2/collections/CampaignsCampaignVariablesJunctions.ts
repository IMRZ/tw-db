
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignVariables } from "./CampaignVariables";
import { Campaigns } from "./Campaigns";

export namespace CampaignsCampaignVariablesJunctions {
  export const KEY = new CollectionKey("campaigns_campaign_variables_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _variableKey: string;
    readonly _campaignName: string;
    readonly value: number;
    readonly optionalDifficultyLevel: string;
    readonly optionalCampaignType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._variableKey = values["variable_key"];
      this._campaignName = values["campaign_name"];
      this.value = values["value"];
      this.optionalDifficultyLevel = values["optional_difficulty_level"];
      this.optionalCampaignType = values["optional_campaign_type"];
    }
    
    get variableKey(): CampaignVariables.Entry | undefined {
      const collection = <CampaignVariables.Entry[]>this.collectionCache.getCollection(CampaignVariables.KEY, CampaignVariables.Entry);
      return collection.find(entry => entry.variableKey === this._variableKey);
    }
    
    get campaignName(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignName);
    }
  }
}

export default CampaignsCampaignVariablesJunctions;
