import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAutoresolverStatVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAutoresolverStatVariables;
