import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PoliticalActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly politicalActionKey: string;
        readonly onscreenDescription: string;
        readonly icon: string;
        readonly baseCostPercentage: number;
        readonly minimumCost: number;
        readonly rankMultiplier: number;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PoliticalActions;
