import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignSubjectStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly string: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignSubjectStrings;
