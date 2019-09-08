
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitAbility } from "./CampaignBonusValueIdsUnitAbility";
import { UnitAbilities } from "./UnitAbilities";

export namespace EffectBonusValueUnitAbilityJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitAbility = values["unit_ability"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitAbility.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitAbility.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitAbility.KEY, CampaignBonusValueIdsUnitAbility.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitAbility(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._unitAbility);
    }
  }
}

export default EffectBonusValueUnitAbilityJunctions;
