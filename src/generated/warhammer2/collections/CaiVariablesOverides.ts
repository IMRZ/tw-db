
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiVariables } from "./CaiVariables";
import { Campaigns } from "./Campaigns";

export namespace CaiVariablesOverides {
  export const KEY = new CollectionKey("cai_variables_overides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _caiVariableKey: string;
    readonly _campaignKey: string;
    readonly value: number;
    readonly optionalDifficultyLevel: string;
    readonly optionalCampaignType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._caiVariableKey = values["cai_variable_key"];
      this._campaignKey = values["campaign_key"];
      this.value = values["value"];
      this.optionalDifficultyLevel = values["optional_difficulty_level"];
      this.optionalCampaignType = values["optional_campaign_type"];
    }
    
    get caiVariableKey(): CaiVariables.Entry | undefined {
      const collection = <CaiVariables.Entry[]>this.collectionCache.getCollection(CaiVariables.KEY, CaiVariables.Entry);
      return collection.find(entry => entry.key === this._caiVariableKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default CaiVariablesOverides;
