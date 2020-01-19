import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignGroupMemberCriteriaCampaignContexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly context: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignGroupMemberCriteriaCampaignContexts;
