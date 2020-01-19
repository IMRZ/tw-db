import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PlayerGameDifficultyTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly difficultyType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PlayerGameDifficultyTypes;
