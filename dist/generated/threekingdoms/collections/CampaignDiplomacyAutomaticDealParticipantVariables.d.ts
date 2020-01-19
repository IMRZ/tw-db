import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";
export declare namespace CampaignDiplomacyAutomaticDealParticipantVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _participant: string;
        readonly _variable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get participant(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined;
        get variable(): CampaignDiplomacyFilterSources.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticDealParticipantVariables;
