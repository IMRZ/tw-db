import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";
export declare namespace CampaignDiplomacyAutomaticComplexDealComponentVariableParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _variableParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined;
        get variableParameter(): CampaignDiplomacyFilterSources.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDealComponentVariableParameters;
