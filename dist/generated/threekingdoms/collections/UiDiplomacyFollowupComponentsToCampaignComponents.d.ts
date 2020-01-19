import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { UiDiplomacyFollowupNegotiationComponents } from "./UiDiplomacyFollowupNegotiationComponents";
export declare namespace UiDiplomacyFollowupComponentsToCampaignComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignDiplomacyTreatyComponent: string;
        readonly _uiDiplomacyFollowupNegotiationComponent: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get uiDiplomacyFollowupNegotiationComponent(): UiDiplomacyFollowupNegotiationComponents.Entry | undefined;
    }
}
export default UiDiplomacyFollowupComponentsToCampaignComponents;
