import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyAutomaticSimpleDealFactionParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _factionParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined;
        get factionParameter(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticSimpleDealFactionParameters;
