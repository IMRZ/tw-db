import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";
import { CampaignDiplomacyAutomaticComplexDealParticipantSets } from "./CampaignDiplomacyAutomaticComplexDealParticipantSets";
export declare namespace CampaignDiplomacyAutomaticComplexDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly _participants: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticDeals.Entry | undefined;
        get participants(): CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDeals;
