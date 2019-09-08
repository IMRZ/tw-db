import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
export declare namespace BattleAutoresolverBalances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sourceUnitClass: string;
        readonly _targetUnitClass: string;
        readonly meleePotentialMultiplier: number;
        readonly missilePotentialMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly sourceUnitClass: UnitClass.Entry | undefined;
        readonly targetUnitClass: UnitClass.Entry | undefined;
    }
}
export default BattleAutoresolverBalances;
