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
        readonly climatePhaseLowerThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly season: Seasons.Entry | undefined;
        readonly attritionType: CampaignMapAttritions.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default SeasonAttritions;