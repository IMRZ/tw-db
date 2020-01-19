import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenSpeechGroups } from "./LoadingScreenSpeechGroups";
export declare namespace LoadingScreenSpeechContentToGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly content: string;
        readonly priority: number;
        readonly filenameKey: string;
        readonly numVariations: number;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): LoadingScreenSpeechGroups.Entry | undefined;
    }
}
export default LoadingScreenSpeechContentToGroupsJunctions;
