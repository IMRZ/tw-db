import { CollectionCache, CollectionKey } from "../../../common";
import { SpawnableForces } from "./SpawnableForces";
import { UnitLists } from "./UnitLists";
export declare namespace SpawnableForceUnitListJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _spawnableForce: string;
        readonly _unitList: string;
        readonly minXp: number;
        readonly maxXp: number;
        readonly minAmount: number;
        readonly maxAmount: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly spawnableForce: SpawnableForces.Entry | undefined;
        readonly unitList: UnitLists.Entry | undefined;
    }
}
export default SpawnableForceUnitListJunctions;
