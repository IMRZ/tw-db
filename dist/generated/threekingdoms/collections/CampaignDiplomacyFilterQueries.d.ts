import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
import { CampaignDiplomacyVariableSources } from "./CampaignDiplomacyVariableSources";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyFilterQueries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _filter: string;
        readonly _variableSource: string;
        readonly _requirementSet: string;
        readonly _variable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get filter(): CampaignDiplomacyFilters.Entry | undefined;
        get variableSource(): CampaignDiplomacyVariableSources.Entry | undefined;
        get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined;
        get variable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyFilterQueries;
