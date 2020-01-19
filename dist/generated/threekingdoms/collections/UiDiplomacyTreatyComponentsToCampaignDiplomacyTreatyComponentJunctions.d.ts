import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { UiDiplomacyRequestDirections } from "./UiDiplomacyRequestDirections";
export declare namespace UiDiplomacyTreatyComponentsToCampaignDiplomacyTreatyComponentJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uiDiplomacyTreatyComponent: string;
        readonly _campaignDiplomacyTreatyComponent: string;
        readonly _requestDirection: string;
        constructor(collectionCache: CollectionCache, values: any);
        get uiDiplomacyTreatyComponent(): UiDiplomacyTreatyComponents.Entry | undefined;
        get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get requestDirection(): UiDiplomacyRequestDirections.Entry | undefined;
    }
}
export default UiDiplomacyTreatyComponentsToCampaignDiplomacyTreatyComponentJunctions;
