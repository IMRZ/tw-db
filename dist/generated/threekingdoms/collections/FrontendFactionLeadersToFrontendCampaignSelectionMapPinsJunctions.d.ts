import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { FrontendCampaignSelectionMapPins } from "./FrontendCampaignSelectionMapPins";
import { Campaigns } from "./Campaigns";
export declare namespace FrontendFactionLeadersToFrontendCampaignSelectionMapPinsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _frontendFactionLeader: string;
        readonly _frontendCampaignSelectionMapPin: string;
        readonly localisedDescription: string;
        readonly _campaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined;
        get frontendCampaignSelectionMapPin(): FrontendCampaignSelectionMapPins.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default FrontendFactionLeadersToFrontendCampaignSelectionMapPinsJunctions;
