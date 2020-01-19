import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
import { CampaignDiplomacyTreatyRequirements } from "./CampaignDiplomacyTreatyRequirements";
export declare namespace CampaignDiplomacyRequirementSetRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirementSet: string;
        readonly _requirement: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined;
        get requirement(): CampaignDiplomacyTreatyRequirements.Entry | undefined;
    }
}
export default CampaignDiplomacyRequirementSetRequirements;
