import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProjectilesScalingDamages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minDamageMultiplier: number;
        readonly maxDamageMultiplier: number;
        readonly minHealthRatio: number;
        readonly maxHealthRatio: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProjectilesScalingDamages;
