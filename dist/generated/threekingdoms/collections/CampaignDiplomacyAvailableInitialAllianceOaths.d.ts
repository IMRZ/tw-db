import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace CampaignDiplomacyAvailableInitialAllianceOaths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _allianceOath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get allianceOath(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default CampaignDiplomacyAvailableInitialAllianceOaths;
