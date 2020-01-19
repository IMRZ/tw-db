import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace StartPosDiplomacyComplexDealComponentAllianceOathParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _allianceOathParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined;
        get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealComponentAllianceOathParameters;
