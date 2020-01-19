import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyMovementOptionSimpleDealFactionParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _factionParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined;
        get factionParameter(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptionSimpleDealFactionParameters;
