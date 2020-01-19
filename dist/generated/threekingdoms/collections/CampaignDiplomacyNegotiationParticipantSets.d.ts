import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationParticipantTypes } from "./CampaignDiplomacyNegotiationParticipantTypes";
export declare namespace CampaignDiplomacyNegotiationParticipantSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly set: string;
        readonly _primaryProposer: string;
        readonly _primaryRecipient: string;
        constructor(collectionCache: CollectionCache, values: any);
        get primaryProposer(): CampaignDiplomacyNegotiationParticipantTypes.Entry | undefined;
        get primaryRecipient(): CampaignDiplomacyNegotiationParticipantTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationParticipantSets;
