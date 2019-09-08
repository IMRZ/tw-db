import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Effects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly effect: string;
        readonly icon: string;
        readonly description: string;
        readonly priority: number;
        readonly iconNegative: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Effects;
