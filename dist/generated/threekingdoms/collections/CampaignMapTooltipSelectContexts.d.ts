import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapTooltipSelectContexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly selectContext: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapTooltipSelectContexts;
