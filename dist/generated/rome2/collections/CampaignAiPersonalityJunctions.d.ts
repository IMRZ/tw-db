import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiPersonalities } from "./CampaignAiPersonalities";
import { CampaignAiPersonalityProperties } from "./CampaignAiPersonalityProperties";
export declare namespace CampaignAiPersonalityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _personality: string;
        readonly _property: string;
        readonly propertyValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get personality(): CampaignAiPersonalities.Entry | undefined;
        get property(): CampaignAiPersonalityProperties.Entry | undefined;
    }
}
export default CampaignAiPersonalityJunctions;
