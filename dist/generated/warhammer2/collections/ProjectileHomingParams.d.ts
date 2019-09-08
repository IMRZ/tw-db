import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProjectileHomingParams {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly startTime: number;
        readonly maxTargetAngleDelta: number;
        readonly lookaheadTime: number;
        readonly steeringCoefficient: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProjectileHomingParams;
