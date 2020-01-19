
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsSpecialAbilityPhases } from "./CampaignBonusValueIdsSpecialAbilityPhases";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";

export namespace EffectBonusValueSpecialAbilityPhaseRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_special_ability_phase_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _specialAbilityPhase: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._specialAbilityPhase = values["special_ability_phase"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsSpecialAbilityPhases.Entry | undefined {
      const collection = <CampaignBonusValueIdsSpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsSpecialAbilityPhases.KEY, CampaignBonusValueIdsSpecialAbilityPhases.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get specialAbilityPhase(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._specialAbilityPhase);
    }
  }
}

export default EffectBonusValueSpecialAbilityPhaseRecordJunctions;
