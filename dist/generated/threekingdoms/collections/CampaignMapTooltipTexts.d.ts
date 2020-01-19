import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapTooltipTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly tooltipText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapTooltipTexts;
