import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PoliticalActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly politicalActionKey: string;
        readonly onscreenName: string;
        readonly iconFilePath: string;
        readonly usageCostMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PoliticalActions;
