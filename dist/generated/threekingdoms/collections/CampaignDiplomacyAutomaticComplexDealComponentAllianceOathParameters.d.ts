import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace CampaignDiplomacyAutomaticComplexDealComponentAllianceOathParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _allianceOathParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined;
        get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticComplexDealComponentAllianceOathParameters;
