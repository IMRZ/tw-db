import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyMovementOptionSimpleDealAllianceParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _allianceFactionParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined;
        get allianceFactionParameter(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptionSimpleDealAllianceParameters;
