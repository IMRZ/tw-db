import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignFactionPotentialTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factionPotentialType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignFactionPotentialTypes;
