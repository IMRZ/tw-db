import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyRequirementOptions } from "./CampaignDiplomacyTreatyRequirementOptions";
import { CampaignDiplomacyTreatyRequirementSources } from "./CampaignDiplomacyTreatyRequirementSources";
export declare namespace CampaignDiplomacyTreatyRequirementWorldLeaderStates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _option: string;
        readonly _source: string;
        readonly worldLeader: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get option(): CampaignDiplomacyTreatyRequirementOptions.Entry | undefined;
        get source(): CampaignDiplomacyTreatyRequirementSources.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyRequirementWorldLeaderStates;
