import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyPools } from "./CampaignDiplomacyPools";
import { CampaignDiplomacyPoolAvailableLimitTypes } from "./CampaignDiplomacyPoolAvailableLimitTypes";
export declare namespace CampaignDiplomacyPoolAvailableLimits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pool: string;
        readonly duration: number;
        readonly amountProportion: number;
        readonly incomeProportion: number;
        readonly _type: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pool(): CampaignDiplomacyPools.Entry | undefined;
        get type(): CampaignDiplomacyPoolAvailableLimitTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyPoolAvailableLimits;
