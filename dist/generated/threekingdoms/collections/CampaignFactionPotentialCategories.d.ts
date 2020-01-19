import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactionPotentialTypes } from "./CampaignFactionPotentialTypes";
export declare namespace CampaignFactionPotentialCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignPotential: string;
        readonly baseValue: number;
        readonly randomRollMean: number;
        readonly randomRollLowerBound: number;
        readonly randomRollUpperBound: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignPotential(): CampaignFactionPotentialTypes.Entry | undefined;
    }
}
export default CampaignFactionPotentialCategories;
