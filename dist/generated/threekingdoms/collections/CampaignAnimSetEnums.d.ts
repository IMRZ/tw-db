import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAnimSetEnums {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly skeleton: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAnimSetEnums;
