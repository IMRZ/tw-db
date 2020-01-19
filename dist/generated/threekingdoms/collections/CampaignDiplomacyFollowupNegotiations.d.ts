import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
export declare namespace CampaignDiplomacyFollowupNegotiations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _negotiationType: string;
        readonly _primaryProposer: string;
        readonly _primaryRecipient: string;
        constructor(collectionCache: CollectionCache, values: any);
        get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined;
        get primaryProposer(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
        get primaryRecipient(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiations;
