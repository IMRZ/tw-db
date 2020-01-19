import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FactionResourceIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factionResourceFlag: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        readonly tooltip: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FactionResourceIds;
