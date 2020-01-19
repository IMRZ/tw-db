import { CollectionCache, CollectionKey } from "../../../common";
import { PastExperienceMemoryTypes } from "./PastExperienceMemoryTypes";
export declare namespace PastExperienceReasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedDescription: string;
        readonly _memoryType: string;
        readonly priority: number;
        readonly chanceOfMemory: number;
        constructor(collectionCache: CollectionCache, values: any);
        get memoryType(): PastExperienceMemoryTypes.Entry | undefined;
    }
}
export default PastExperienceReasons;
