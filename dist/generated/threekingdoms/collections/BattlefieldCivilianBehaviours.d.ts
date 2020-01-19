import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattlefieldCivilianBehaviours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly attackNearbySoldiers: boolean;
        readonly unitThreatDistance: number;
        readonly buildingDamageThreatDistance: number;
        readonly largeProjectileThreatDistance: number;
        readonly friendlyEntityHitByProjectileThreatDistance: number;
        readonly nonLocalFleeingCivilianThreatDistance: number;
        readonly chanceToWander: number;
        readonly rallyNearbyCiviliansRadius: number;
        readonly chanceToWanderFromShelter: number;
        readonly chanceToPickShelterAsWanderTarget: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattlefieldCivilianBehaviours;
