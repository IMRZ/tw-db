import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ScriptedSubtitles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedText: string;
        readonly characterForVo: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ScriptedSubtitles;
