import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalityStrategicComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly maxFriendlyAttitude: number;
        readonly friendlyTowardsFriendMultiplier: number;
        readonly hostileTowardsFriendMultiplier: number;
        readonly maxHostileAttitude: number;
        readonly friendlyTowardsEnemyMultiplier: number;
        readonly hostileTowardsEnemyMultiplier: number;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly shortDescription: DiplomacyStrings.Entry | undefined;
        readonly longDescription: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalityStrategicComponents;
