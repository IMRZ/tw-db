import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyFollowupNegotiationParticipantVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _participant: string;
        readonly _variable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
        get variable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationParticipantVariables;
