import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace GameModes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly desciption: string;
        readonly localisedTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default GameModes;
