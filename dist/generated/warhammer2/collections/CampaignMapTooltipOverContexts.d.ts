import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapTooltipOverContexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly overContexts: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapTooltipOverContexts;
