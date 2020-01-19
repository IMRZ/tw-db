import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace UiDiplomacyAllianceOaths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaignDiplomacyAllianceOath: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignDiplomacyAllianceOath(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default UiDiplomacyAllianceOaths;
