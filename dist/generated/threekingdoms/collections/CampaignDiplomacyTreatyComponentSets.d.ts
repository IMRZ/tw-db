import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacyTreatyComponentSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly set: string;
        readonly mustMatchSelf: boolean;
        readonly mustMatchAFactionWithNoComponents: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacyTreatyComponentSets;
