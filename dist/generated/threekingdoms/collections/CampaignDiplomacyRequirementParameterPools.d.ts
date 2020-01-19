import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementParameters } from "./CampaignDiplomacyRequirementParameters";
import { CampaignDiplomacyPools } from "./CampaignDiplomacyPools";
export declare namespace CampaignDiplomacyRequirementParameterPools {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirementParameter: string;
        readonly _pool: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirementParameter(): CampaignDiplomacyRequirementParameters.Entry | undefined;
        get pool(): CampaignDiplomacyPools.Entry | undefined;
    }
}
export default CampaignDiplomacyRequirementParameterPools;
