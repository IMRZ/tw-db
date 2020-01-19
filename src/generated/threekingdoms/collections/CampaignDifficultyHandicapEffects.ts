
import { CollectionCache, CollectionKey } from "../../../common";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
import { Effects } from "./Effects";
import { Campaigns } from "./Campaigns";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace CampaignDifficultyHandicapEffects {
  export const KEY = new CollectionKey("campaign_difficulty_handicap_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignPlayerGameDifficultyType: string;
    readonly human: boolean;
    readonly _effect: string;
    readonly effectValue: number;
    readonly _optionalCampaignKey: string;
    readonly _effectScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignPlayerGameDifficultyType = values["campaign_player_game_difficulty_type"];
      this.human = !!values["human"];
      this._effect = values["effect"];
      this.effectValue = values["effect_value"];
      this._optionalCampaignKey = values["optional_campaign_key"];
      this._effectScope = values["effect_scope"];
    }
    
    get campaignPlayerGameDifficultyType(): PlayerGameDifficultyTypes.Entry | undefined {
      const collection = <PlayerGameDifficultyTypes.Entry[]>this.collectionCache.getCollection(PlayerGameDifficultyTypes.KEY, PlayerGameDifficultyTypes.Entry);
      return collection.find(entry => entry.difficultyType === this._campaignPlayerGameDifficultyType);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
  }
}

export default CampaignDifficultyHandicapEffects;
