import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyRequirements } from "./CampaignDiplomacyTreatyRequirements";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
export declare namespace CampaignDiplomacyTreatyRequirementGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirement: string;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirement(): CampaignDiplomacyTreatyRequirements.Entry | undefined;
        get group(): CampaignDiplomacyGroups.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyRequirementGroups;
