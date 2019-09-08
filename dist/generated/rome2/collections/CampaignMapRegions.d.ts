import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
import { Regions } from "./Regions";
export declare namespace CampaignMapRegions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignMap: string;
        readonly _region: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignMap: CampaignMaps.Entry | undefined;
        readonly region: Regions.Entry | undefined;
    }
}
export default CampaignMapRegions;
