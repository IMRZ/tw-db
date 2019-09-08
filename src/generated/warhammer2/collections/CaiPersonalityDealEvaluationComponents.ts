
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalityDealEvaluationComponents {
  export const KEY = new CollectionKey("cai_personality_deal_evaluation_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly maxPaymentValue: number;
    readonly paymentTreacheryValue: number;
    readonly paymentOfferedMultiplierUnder: number;
    readonly paymentRequestedMultiplier: number;
    readonly paymentOfferedMultiplierOver: number;
    readonly peacePenalty: number;
    readonly peacePenaltyTurns: number;
    readonly warPenalty: number;
    readonly warPenaltyTurns: number;
    readonly trespassingPeaceEffectMultiplier: number;
    readonly trespassingPeaceEffectCap: number;
    readonly trespassingWarEffectMultiplier: number;
    readonly trespassingWarEffectCap: number;
    readonly confederationBonus: number;
    readonly _shortDescription: string;
    readonly _longDescription: string;
    readonly warBreakTreatyBonusTowardsVictoryRegionOwners: number;
    readonly peaceSignTreatyPenaltyTowardsVictoryRegionOwners: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.maxPaymentValue = values["max_payment_value"];
      this.paymentTreacheryValue = values["payment_treachery_value"];
      this.paymentOfferedMultiplierUnder = values["payment_offered_multiplier_under"];
      this.paymentRequestedMultiplier = values["payment_requested_multiplier"];
      this.paymentOfferedMultiplierOver = values["payment_offered_multiplier_over"];
      this.peacePenalty = values["peace_penalty"];
      this.peacePenaltyTurns = values["peace_penalty_turns"];
      this.warPenalty = values["war_penalty"];
      this.warPenaltyTurns = values["war_penalty_turns"];
      this.trespassingPeaceEffectMultiplier = values["trespassing_peace_effect_multiplier"];
      this.trespassingPeaceEffectCap = values["trespassing_peace_effect_cap"];
      this.trespassingWarEffectMultiplier = values["trespassing_war_effect_multiplier"];
      this.trespassingWarEffectCap = values["trespassing_war_effect_cap"];
      this.confederationBonus = values["confederation_bonus"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
      this.warBreakTreatyBonusTowardsVictoryRegionOwners = values["war_break_treaty_bonus_towards_victory_region_owners"];
      this.peaceSignTreatyPenaltyTowardsVictoryRegionOwners = values["peace_sign_treaty_penalty_towards_victory_region_owners"];
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiPersonalityDealEvaluationComponents;
