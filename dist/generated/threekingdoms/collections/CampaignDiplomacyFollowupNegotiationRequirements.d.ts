import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
export declare namespace CampaignDiplomacyFollowupNegotiationRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _followupNegotiation: string;
        readonly _requirement: string;
        constructor(collectionCache: CollectionCache, values: any);
        get followupNegotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined;
        get requirement(): CampaignDiplomacyGroups.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationRequirements;
