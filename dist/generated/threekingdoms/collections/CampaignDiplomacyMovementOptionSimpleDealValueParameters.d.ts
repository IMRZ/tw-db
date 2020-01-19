import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
export declare namespace CampaignDiplomacyMovementOptionSimpleDealValueParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly valueParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptionSimpleDealValueParameters;
