
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiVariables } from "./CaiVariables";
import { Campaigns } from "./Campaigns";
import { GameDifficultyLevels } from "./GameDifficultyLevels";

export namespace CaiVariablesOverides {
  export const KEY = new CollectionKey("cai_variables_overides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _caiVariableKey: string;
    readonly _campaignKey: string;
    readonly value: number;
    readonly _optionalDifficultyLevel: string;
    readonly optionalCampaignType: string;
    readonly round: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._caiVariableKey = values["cai_variable_key"];
      this._campaignKey = values["campaign_key"];
      this.value = values["value"];
      this._optionalDifficultyLevel = values["optional_difficulty_level"];
      this.optionalCampaignType = values["optional_campaign_type"];
      this.round = values["round"];
    }
    
    get caiVariableKey(): CaiVariables.Entry | undefined {
      const collection = <CaiVariables.Entry[]>this.collectionCache.getCollection(CaiVariables.KEY, CaiVariables.Entry);
      return collection.find(entry => entry.key === this._caiVariableKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get optionalDifficultyLevel(): GameDifficultyLevels.Entry | undefined {
      const collection = <GameDifficultyLevels.Entry[]>this.collectionCache.getCollection(GameDifficultyLevels.KEY, GameDifficultyLevels.Entry);
      return collection.find(entry => entry.level === this._optionalDifficultyLevel);
    }
  }
}

export default CaiVariablesOverides;
