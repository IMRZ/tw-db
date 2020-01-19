import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";
export declare namespace CampaignDiplomacyAutomaticSimpleDealDealParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _dealParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined;
        get dealParameter(): CampaignDiplomacyAutomaticDeals.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticSimpleDealDealParameters;
