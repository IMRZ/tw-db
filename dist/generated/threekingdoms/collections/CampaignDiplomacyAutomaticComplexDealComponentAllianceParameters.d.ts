import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyAutomaticComplexDealComponentAllianceParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _allianceFactionParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined;
        get allianceFactionParameter(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDealComponentAllianceParameters;
