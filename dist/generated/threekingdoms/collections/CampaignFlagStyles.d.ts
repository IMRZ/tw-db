import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignFlagStyles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly style: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignFlagStyles;
