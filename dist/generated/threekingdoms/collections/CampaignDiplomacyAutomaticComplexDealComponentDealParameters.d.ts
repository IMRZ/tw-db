import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";
export declare namespace CampaignDiplomacyAutomaticComplexDealComponentDealParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _dealParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined;
        get dealParameter(): CampaignDiplomacyAutomaticDeals.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDealComponentDealParameters;
