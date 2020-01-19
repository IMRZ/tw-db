import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace UiDiplomacyQuickDealTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaignDiplomacyTreatyComponent: string;
        readonly sortOrder: number;
        readonly localisedQuickDealTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default UiDiplomacyQuickDealTreatyComponents;
