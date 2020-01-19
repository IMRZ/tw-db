import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementParameters } from "./CampaignDiplomacyRequirementParameters";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyRequirementParameterVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirementParameter: string;
        readonly _variable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirementParameter(): CampaignDiplomacyRequirementParameters.Entry | undefined;
        get variable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyRequirementParameterVariables;
