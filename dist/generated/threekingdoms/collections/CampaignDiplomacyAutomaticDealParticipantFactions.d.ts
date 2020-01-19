import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyAutomaticDealParticipantFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _participant: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get participant(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticDealParticipantFactions;
