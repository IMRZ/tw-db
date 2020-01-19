
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalityStrategicComponents {
  export const KEY = new CollectionKey("cai_personality_strategic_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly unknownFactionMultiplier: number;
    readonly maxMercProportion: number;
    readonly minMercCap: number;
    readonly enemyStrengthModifier: number;
    readonly enemyThreatStrengthModifier: number;
    readonly minRetreatRatio: number;
    readonly minRetreatToSettlementRatio: number;
    readonly strategicBalanceOpportunismFactor: number;
    readonly fortifiedSettlementAssaultStrengthModifier: number;
    readonly fortifiedSettlementDefendStrengthModifier: number;
    readonly _shortDescription: string;
    readonly _longDescription: string;
    readonly lastSettlementModifier: number;
    readonly minRefuseTunnelingInterceptRatio: number;
    readonly useClassicStanceGenerationMechanics: boolean;
    readonly strategicContextDefaultBandValue: number;
    readonly strategicContextMaximumBandAdjustmentProportion: number;
    readonly strategicContextMaximumBandAdjustmentReachedInRounds: number;
    readonly strategicContextGlobalStrenthBalanceWeight: number;
    readonly strategicContextLocalStrengthBalanceWeight: number;
    readonly factionLeaderRetinueRecruitmentAspectDistributionBias: number;
    readonly allowOpportunisticAttacks: boolean;
    readonly aiThreatScoreThreatTreshold: number;
    readonly sallyOutChance: number;
    readonly strategicContextEnemyStrengthRatioLowerBound: number;
    readonly strategicContextEnemyStrengthRatioUpperBound: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.unknownFactionMultiplier = values["unknown_faction_multiplier"];
      this.maxMercProportion = values["max_merc_proportion"];
      this.minMercCap = values["min_merc_cap"];
      this.enemyStrengthModifier = values["enemy_strength_modifier"];
      this.enemyThreatStrengthModifier = values["enemy_threat_strength_modifier"];
      this.minRetreatRatio = values["min_retreat_ratio"];
      this.minRetreatToSettlementRatio = values["min_retreat_to_settlement_ratio"];
      this.strategicBalanceOpportunismFactor = values["strategic_balance_opportunism_factor"];
      this.fortifiedSettlementAssaultStrengthModifier = values["fortified_settlement_assault_strength_modifier"];
      this.fortifiedSettlementDefendStrengthModifier = values["fortified_settlement_defend_strength_modifier"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
      this.lastSettlementModifier = values["last_settlement_modifier"];
      this.minRefuseTunnelingInterceptRatio = values["min_refuse_tunneling_intercept_ratio"];
      this.useClassicStanceGenerationMechanics = !!values["use_classic_stance_generation_mechanics"];
      this.strategicContextDefaultBandValue = values["strategic_context_default_band_value"];
      this.strategicContextMaximumBandAdjustmentProportion = values["strategic_context_maximum_band_adjustment_proportion"];
      this.strategicContextMaximumBandAdjustmentReachedInRounds = values["strategic_context_maximum_band_adjustment_reached_in_rounds"];
      this.strategicContextGlobalStrenthBalanceWeight = values["strategic_context_global_strenth_balance_weight"];
      this.strategicContextLocalStrengthBalanceWeight = values["strategic_context_local_strength_balance_weight"];
      this.factionLeaderRetinueRecruitmentAspectDistributionBias = values["faction_leader_retinue_recruitment_aspect_distribution_bias"];
      this.allowOpportunisticAttacks = !!values["allow_opportunistic_attacks"];
      this.aiThreatScoreThreatTreshold = values["ai_threat_score_threat_treshold"];
      this.sallyOutChance = values["sally_out_chance"];
      this.strategicContextEnemyStrengthRatioLowerBound = values["strategic_context_enemy_strength_ratio_lower_bound"];
      this.strategicContextEnemyStrengthRatioUpperBound = values["strategic_context_enemy_strength_ratio_upper_bound"];
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

export default CaiPersonalityStrategicComponents;
