import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAiBehaviours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly behaviour: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAiBehaviours;
