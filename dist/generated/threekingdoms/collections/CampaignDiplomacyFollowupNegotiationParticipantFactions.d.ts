import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyFollowupNegotiationParticipantFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _participant: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationParticipantFactions;
