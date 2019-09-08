import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace VoiceEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default VoiceEvents;
