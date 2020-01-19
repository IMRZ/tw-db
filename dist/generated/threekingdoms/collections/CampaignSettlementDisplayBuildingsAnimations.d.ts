import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignSettlementDisplayBuildingsAnimations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly time: number;
        readonly delay: number;
        readonly translationYStart: number;
        readonly translationYEnd: number;
        readonly timeDeviation: number;
        readonly delayDeviation: number;
        readonly alphaStart: number;
        readonly alphaEnd: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignSettlementDisplayBuildingsAnimations;
