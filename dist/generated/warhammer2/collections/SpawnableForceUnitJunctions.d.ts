import { CollectionCache, CollectionKey } from "../../../common";
import { SpawnableForces } from "./SpawnableForces";
import { MainUnits } from "./MainUnits";
export declare namespace SpawnableForceUnitJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _spawnableForce: string;
        readonly _unit: string;
        readonly minXp: number;
        readonly maxXp: number;
        readonly minAmount: number;
        readonly maxAmount: number;
        constructor(collectionCache: CollectionCache, values: any);
        get spawnableForce(): SpawnableForces.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default SpawnableForceUnitJunctions;
