import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
export declare namespace CampaignMapAreasOfInterest {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaignMap: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignMap(): CampaignMaps.Entry | undefined;
    }
}
export default CampaignMapAreasOfInterest;
