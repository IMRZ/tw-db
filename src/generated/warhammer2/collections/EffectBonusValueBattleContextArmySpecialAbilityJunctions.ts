
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContextArmySpecialAbilities } from "./CampaignBonusValueIdsBattleContextArmySpecialAbilities";
import { BattleContextArmySpecialAbilityJunctions } from "./BattleContextArmySpecialAbilityJunctions";

export namespace EffectBonusValueBattleContextArmySpecialAbilityJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_battle_context_army_special_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _battleContextArmySpecialAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._battleContextArmySpecialAbility = values["battle_context_army_special_ability"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBattleContextArmySpecialAbilities.Entry | undefined {
      const collection = <CampaignBonusValueIdsBattleContextArmySpecialAbilities.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBattleContextArmySpecialAbilities.KEY, CampaignBonusValueIdsBattleContextArmySpecialAbilities.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get battleContextArmySpecialAbility(): BattleContextArmySpecialAbilityJunctions.Entry | undefined {
      const collection = <BattleContextArmySpecialAbilityJunctions.Entry[]>this.collectionCache.getCollection(BattleContextArmySpecialAbilityJunctions.KEY, BattleContextArmySpecialAbilityJunctions.Entry);
      return collection.find(entry => entry.key === this._battleContextArmySpecialAbility);
    }
  }
}

export default EffectBonusValueBattleContextArmySpecialAbilityJunctions;
