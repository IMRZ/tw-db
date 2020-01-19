import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioGroupSoundSituations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly situation: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioGroupSoundSituations;
