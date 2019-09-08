import { CollectionCache, CollectionKey } from "../../../common";
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
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityStrategicComponents;
