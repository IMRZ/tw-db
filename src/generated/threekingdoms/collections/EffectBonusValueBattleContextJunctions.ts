
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContexts } from "./CampaignBonusValueIdsBattleContexts";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";

export namespace EffectBonusValueBattleContextJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_battle_context_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectKey: string;
    readonly _bonusValueId: string;
    readonly _battleContextKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectKey = values["effect_key"];
      this._bonusValueId = values["bonus_value_id"];
      this._battleContextKey = values["battle_context_key"];
    }
    
    get effectKey(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectKey);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBattleContexts.Entry | undefined {
      const collection = <CampaignBonusValueIdsBattleContexts.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBattleContexts.KEY, CampaignBonusValueIdsBattleContexts.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContextKey);
    }
  }
}

export default EffectBonusValueBattleContextJunctions;
