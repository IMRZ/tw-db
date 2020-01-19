import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace UiDiplomacyConstants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaignDiplomacyTreatyComponent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default UiDiplomacyConstants;
