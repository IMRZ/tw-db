import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
export declare namespace CampaignDiplomacyAutomaticSimpleDealValueParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly valueParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticSimpleDealValueParameters;
