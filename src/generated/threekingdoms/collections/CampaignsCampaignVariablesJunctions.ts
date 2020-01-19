
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignVariables } from "./CampaignVariables";
import { Campaigns } from "./Campaigns";
import { GameDifficultyLevels } from "./GameDifficultyLevels";
import { GameModes } from "./GameModes";

export namespace CampaignsCampaignVariablesJunctions {
  export const KEY = new CollectionKey("campaigns_campaign_variables_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _variableKey: string;
    readonly _campaignName: string;
    readonly value: number;
    readonly _optionalGameDifficultyLevel: string;
    readonly optionalCampaignType: string;
    readonly _optionalGameMode: string;
    readonly round: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._variableKey = values["variable_key"];
      this._campaignName = values["campaign_name"];
      this.value = values["value"];
      this._optionalGameDifficultyLevel = values["optional_game_difficulty_level"];
      this.optionalCampaignType = values["optional_campaign_type"];
      this._optionalGameMode = values["optional_game_mode"];
      this.round = values["round"];
    }
    
    get variableKey(): CampaignVariables.Entry | undefined {
      const collection = <CampaignVariables.Entry[]>this.collectionCache.getCollection(CampaignVariables.KEY, CampaignVariables.Entry);
      return collection.find(entry => entry.variableKey === this._variableKey);
    }
    
    get campaignName(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignName);
    }
    
    get optionalGameDifficultyLevel(): GameDifficultyLevels.Entry | undefined {
      const collection = <GameDifficultyLevels.Entry[]>this.collectionCache.getCollection(GameDifficultyLevels.KEY, GameDifficultyLevels.Entry);
      return collection.find(entry => entry.level === this._optionalGameDifficultyLevel);
    }
    
    get optionalGameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._optionalGameMode);
    }
  }
}

export default CampaignsCampaignVariablesJunctions;
