import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityDiplomaticAttitudeComponents {
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
        readonly attitudeDeadzone: number;
        readonly treatyBasedTransitiveness: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityDiplomaticAttitudeComponents;
