import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacyTreatyDurations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly rounds: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacyTreatyDurations;
