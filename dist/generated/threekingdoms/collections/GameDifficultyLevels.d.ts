import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace GameDifficultyLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly level: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default GameDifficultyLevels;
