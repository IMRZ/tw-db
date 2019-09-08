import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { Projectiles } from "./Projectiles";
import { SpecialAbilitiesSpecificBehaviourTypes } from "./SpecialAbilitiesSpecificBehaviourTypes";
export declare namespace UnitSpecialAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly numUses: number;
        readonly activeTime: number;
        readonly rechargeTime: number;
        readonly initialRecharge: number;
        readonly windUpTime: number;
        readonly passive: boolean;
        readonly effectRange: number;
        readonly affectSelf: boolean;
        readonly numEffectedFriendlyUnits: number;
        readonly numEffectedEnemyUnits: number;
        readonly updateTargetsEveryFrame: boolean;
        readonly _activatedProjectile: string;
        readonly canAutotrigger: boolean;
        readonly targetFriends: boolean;
        readonly targetEnemies: boolean;
        readonly targetGround: boolean;
        readonly targetInterceptRange: number;
        readonly _assumeSpecificBehaviour: string;
        readonly clearCurrentOrder: boolean;
        readonly uniqueId: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: UnitAbilities.Entry | undefined;
        readonly activatedProjectile: Projectiles.Entry | undefined;
        readonly assumeSpecificBehaviour: SpecialAbilitiesSpecificBehaviourTypes.Entry | undefined;
    }
}
export default UnitSpecialAbilities;
