import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignCompositeScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly filename: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignCompositeScenes;
