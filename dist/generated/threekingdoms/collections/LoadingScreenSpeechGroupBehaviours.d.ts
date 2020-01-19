import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenSpeechGroups } from "./LoadingScreenSpeechGroups";
export declare namespace LoadingScreenSpeechGroupBehaviours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly startingPriority: number;
        readonly lockAfterTurn: number;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): LoadingScreenSpeechGroups.Entry | undefined;
    }
}
export default LoadingScreenSpeechGroupBehaviours;
