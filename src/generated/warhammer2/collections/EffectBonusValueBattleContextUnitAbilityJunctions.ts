
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContextUnitAbilities } from "./CampaignBonusValueIdsBattleContextUnitAbilities";
import { BattleContextUnitAbilityJunctions } from "./BattleContextUnitAbilityJunctions";

export namespace EffectBonusValueBattleContextUnitAbilityJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_battle_context_unit_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectKey: string;
    readonly _bonusValueId: string;
    readonly _battleContextUnitAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectKey = values["effect_key"];
      this._bonusValueId = values["bonus_value_id"];
      this._battleContextUnitAbility = values["battle_context_unit_ability"];
    }
    
    get effectKey(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectKey);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBattleContextUnitAbilities.Entry | undefined {
      const collection = <CampaignBonusValueIdsBattleContextUnitAbilities.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBattleContextUnitAbilities.KEY, CampaignBonusValueIdsBattleContextUnitAbilities.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get battleContextUnitAbility(): BattleContextUnitAbilityJunctions.Entry | undefined {
      const collection = <BattleContextUnitAbilityJunctions.Entry[]>this.collectionCache.getCollection(BattleContextUnitAbilityJunctions.KEY, BattleContextUnitAbilityJunctions.Entry);
      return collection.find(entry => entry.key === this._battleContextUnitAbility);
    }
  }
}

export default EffectBonusValueBattleContextUnitAbilityJunctions;
