import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace RegionEconomicsFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factor: string;
        readonly positivePipPath: string;
        readonly positiveTooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default RegionEconomicsFactors;
