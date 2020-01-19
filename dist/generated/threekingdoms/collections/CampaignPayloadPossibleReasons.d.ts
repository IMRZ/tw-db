import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignPayloadPossibleReasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly reason: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignPayloadPossibleReasons;
