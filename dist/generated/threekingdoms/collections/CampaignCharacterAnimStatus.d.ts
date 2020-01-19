import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignCharacterAnimStatus {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly status: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignCharacterAnimStatus;
