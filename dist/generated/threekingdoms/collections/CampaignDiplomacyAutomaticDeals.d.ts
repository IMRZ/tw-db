import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";
export declare namespace CampaignDiplomacyAutomaticDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _negotiationType: string;
        readonly canCreateFollowupNegotiations: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticDeals;
