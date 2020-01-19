import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace StartPosDiplomacySimpleDealAllianceOathParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _allianceOathParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacySimpleDeals.Entry | undefined;
        get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default StartPosDiplomacySimpleDealAllianceOathParameters;
