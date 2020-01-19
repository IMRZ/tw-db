import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalityStrategicComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get shortDescription(): DiplomacyStrings.Entry | undefined;
        get longDescription(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalityStrategicComponents;
