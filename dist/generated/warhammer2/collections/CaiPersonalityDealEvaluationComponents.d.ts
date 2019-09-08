import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalityDealEvaluationComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly shortDescription: DiplomacyStrings.Entry | undefined;
        readonly longDescription: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalityDealEvaluationComponents;
