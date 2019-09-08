import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAiManagers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly manager: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAiManagers;
