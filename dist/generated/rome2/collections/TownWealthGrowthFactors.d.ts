import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TownWealthGrowthFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factor: string;
        readonly positivePipPath: string;
        readonly positiveTooltip: string;
        readonly negativePipPath: string;
        readonly negativeTooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TownWealthGrowthFactors;
