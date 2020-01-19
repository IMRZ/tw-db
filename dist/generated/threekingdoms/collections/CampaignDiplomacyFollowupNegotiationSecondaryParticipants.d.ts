import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
export declare namespace CampaignDiplomacyFollowupNegotiationSecondaryParticipants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _negotiation: string;
        readonly _role: string;
        readonly _participant: string;
        constructor(collectionCache: CollectionCache, values: any);
        get negotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined;
        get role(): CampaignDiplomacyNegotiationRoles.Entry | undefined;
        get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationSecondaryParticipants;
