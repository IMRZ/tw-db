import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealParticipantSets } from "./StartPosDiplomacyComplexDealParticipantSets";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { StartPosFactions } from "./StartPosFactions";
export declare namespace StartPosDiplomacyComplexDealParticipants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _role: string;
        readonly _faction: number;
        readonly isAllianceParticipant: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): StartPosDiplomacyComplexDealParticipantSets.Entry | undefined;
        get role(): CampaignDiplomacyNegotiationRoles.Entry | undefined;
        get faction(): StartPosFactions.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealParticipants;
