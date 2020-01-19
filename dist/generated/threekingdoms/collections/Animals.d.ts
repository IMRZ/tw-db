import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { UnitArmourTypes } from "./UnitArmourTypes";
export declare namespace Animals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _animation: string;
        readonly _entity: string;
        readonly meleeAttack: number;
        readonly meleeDefence: number;
        readonly chargeBonus: number;
        readonly _armour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get animation(): BattleAnimationsTable.Entry | undefined;
        get entity(): BattleEntities.Entry | undefined;
        get armour(): UnitArmourTypes.Entry | undefined;
    }
}
export default Animals;
