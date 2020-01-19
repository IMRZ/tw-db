import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacyAllianceNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly name: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacyAllianceNames;
