import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";
export declare namespace CampaignDiplomacyAutomaticSimpleDealVariableParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: string;
        readonly _variableParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined;
        get variableParameter(): CampaignDiplomacyFilterSources.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticSimpleDealVariableParameters;
