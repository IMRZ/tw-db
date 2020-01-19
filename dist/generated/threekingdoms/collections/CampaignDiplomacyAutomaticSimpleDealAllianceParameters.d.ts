import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyAutomaticSimpleDealAllianceParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _allianceFactionParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined;
        get allianceFactionParameter(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticSimpleDealAllianceParameters;
