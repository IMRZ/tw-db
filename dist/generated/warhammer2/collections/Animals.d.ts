import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { UnitArmourTypes } from "./UnitArmourTypes";
import { Variants } from "./Variants";
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
        readonly _variant: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly animation: BattleAnimationsTable.Entry | undefined;
        readonly entity: BattleEntities.Entry | undefined;
        readonly armour: UnitArmourTypes.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
    }
}
export default Animals;
