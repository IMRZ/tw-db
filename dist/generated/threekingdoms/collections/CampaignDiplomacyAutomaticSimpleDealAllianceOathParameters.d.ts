import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace CampaignDiplomacyAutomaticSimpleDealAllianceOathParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _allianceOathParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined;
        get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticSimpleDealAllianceOathParameters;
