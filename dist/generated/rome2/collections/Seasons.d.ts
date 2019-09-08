import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Seasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly season: string;
        readonly onscreen: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Seasons;
