import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealParticipantSets } from "./CampaignDiplomacyAutomaticComplexDealParticipantSets";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
export declare namespace CampaignDiplomacyAutomaticComplexDealParticipants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _role: string;
        readonly _faction: string;
        readonly isAllianceParticipant: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry | undefined;
        get role(): CampaignDiplomacyNegotiationRoles.Entry | undefined;
        get faction(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDealParticipants;
