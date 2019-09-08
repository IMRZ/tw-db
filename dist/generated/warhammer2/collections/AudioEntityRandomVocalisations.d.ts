import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioEntityRandomVocalisations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly event: string;
        readonly minTime: number;
        readonly maxTime: number;
        readonly useReverb: boolean;
        readonly useObstruction: boolean;
        readonly limitationScale: number;
        readonly minProbability: number;
        readonly maxProbability: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioEntityRandomVocalisations;
