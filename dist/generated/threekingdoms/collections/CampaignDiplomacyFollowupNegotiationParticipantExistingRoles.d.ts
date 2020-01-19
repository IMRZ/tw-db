import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
export declare namespace CampaignDiplomacyFollowupNegotiationParticipantExistingRoles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _participant: string;
        readonly _priorRole: string;
        constructor(collectionCache: CollectionCache, values: any);
        get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
        get priorRole(): CampaignDiplomacyNegotiationRoles.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationParticipantExistingRoles;
