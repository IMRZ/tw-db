import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignPayloadUiDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly component: string;
        readonly description: string;
        readonly icon: string;
        readonly comment: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignPayloadUiDetails;
