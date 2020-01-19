import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { Campaigns } from "./Campaigns";
export declare namespace SeasonAttritions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _season: string;
        readonly _attritionType: string;
        readonly enable: boolean;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get season(): Seasons.Entry | undefined;
        get attritionType(): CampaignMapAttritions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default SeasonAttritions;
