import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
export declare namespace CampaignDiplomacyTreatyComponentFollowupNegotiations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _followupNegotiation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get followupNegotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentFollowupNegotiations;
