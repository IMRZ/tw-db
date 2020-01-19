import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyPoolSources } from "./CampaignDiplomacyPoolSources";
export declare namespace CampaignDiplomacyPools {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _source: string;
        readonly knowable: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get source(): CampaignDiplomacyPoolSources.Entry | undefined;
    }
}
export default CampaignDiplomacyPools;
