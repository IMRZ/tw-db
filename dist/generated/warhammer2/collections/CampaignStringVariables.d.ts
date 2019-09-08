import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignStringVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignStringVariables;
