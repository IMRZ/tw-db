import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioProjectileBombardments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly event: string;
        readonly obstructionSize: number;
        readonly useReverb: boolean;
        readonly maxAttenuation: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioProjectileBombardments;
