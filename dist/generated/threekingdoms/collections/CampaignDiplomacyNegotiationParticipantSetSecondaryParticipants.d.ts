import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationParticipantSets } from "./CampaignDiplomacyNegotiationParticipantSets";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { CampaignDiplomacyNegotiationParticipantTypes } from "./CampaignDiplomacyNegotiationParticipantTypes";
export declare namespace CampaignDiplomacyNegotiationParticipantSetSecondaryParticipants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _participantSet: string;
        readonly _participantRole: string;
        readonly _participantType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get participantSet(): CampaignDiplomacyNegotiationParticipantSets.Entry | undefined;
        get participantRole(): CampaignDiplomacyNegotiationRoles.Entry | undefined;
        get participantType(): CampaignDiplomacyNegotiationParticipantTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationParticipantSetSecondaryParticipants;
