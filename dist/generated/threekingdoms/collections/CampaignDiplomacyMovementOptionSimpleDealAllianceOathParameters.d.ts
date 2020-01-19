import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace CampaignDiplomacyMovementOptionSimpleDealAllianceOathParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _allianceOath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined;
        get allianceOath(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptionSimpleDealAllianceOathParameters;
