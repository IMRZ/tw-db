import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDeals } from "./CampaignDiplomacyAutomaticComplexDeals";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyAutomaticComplexDealComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _deal: string;
        readonly _proposer: string;
        readonly _recipient: string;
        readonly _component: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticComplexDeals.Entry | undefined;
        get proposer(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined;
        get recipient(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDealComponents;
