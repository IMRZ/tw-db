import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioEntityFocusPools {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly poolName: string;
        readonly poolMinDistance: number;
        readonly poolMaxDistance: number;
        readonly poolId: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioEntityFocusPools;
