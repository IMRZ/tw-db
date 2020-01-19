import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
import { CampaignDiplomacyParameters } from "./CampaignDiplomacyParameters";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";
export declare namespace CampaignDiplomacyRequirementParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _requirementSet: string;
        readonly _parameter: string;
        readonly parameterIndex: number;
        readonly _reason: string;
        readonly expireOnDeath: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined;
        get parameter(): CampaignDiplomacyParameters.Entry | undefined;
        get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined;
    }
}
export default CampaignDiplomacyRequirementParameters;
