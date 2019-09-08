
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsMilitaryForceAbilitys } from "./CampaignBonusValueIdsMilitaryForceAbilitys";
import { ArmySpecialAbilities } from "./ArmySpecialAbilities";

export namespace EffectBonusValueMilitaryForceAbilityJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_military_force_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _forceAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._forceAbility = values["force_ability"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsMilitaryForceAbilitys.Entry | undefined {
      const collection = <CampaignBonusValueIdsMilitaryForceAbilitys.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsMilitaryForceAbilitys.KEY, CampaignBonusValueIdsMilitaryForceAbilitys.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get forceAbility(): ArmySpecialAbilities.Entry | undefined {
      const collection = <ArmySpecialAbilities.Entry[]>this.collectionCache.getCollection(ArmySpecialAbilities.KEY, ArmySpecialAbilities.Entry);
      return collection.find(entry => entry.armySpecialAbility === this._forceAbility);
    }
  }
}

export default EffectBonusValueMilitaryForceAbilityJunctions;
