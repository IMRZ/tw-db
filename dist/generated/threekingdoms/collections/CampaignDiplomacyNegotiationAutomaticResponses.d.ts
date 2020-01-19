import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
export declare namespace CampaignDiplomacyNegotiationAutomaticResponses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirementSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationAutomaticResponses;
