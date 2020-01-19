import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyRequirements } from "./CampaignDiplomacyTreatyRequirements";
import { CampaignDiplomacyTreatyRequirementOptions } from "./CampaignDiplomacyTreatyRequirementOptions";
export declare namespace CampaignDiplomacyTreatyRequirementRequirementOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _requirement: string;
        readonly _option: string;
        constructor(collectionCache: CollectionCache, values: any);
        get requirement(): CampaignDiplomacyTreatyRequirements.Entry | undefined;
        get option(): CampaignDiplomacyTreatyRequirementOptions.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyRequirementRequirementOptions;
