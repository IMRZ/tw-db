import { CollectionCache, CollectionKey } from "../../../common";
import { RegionGroups } from "./RegionGroups";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignMapWindsOfMagicAreas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _regionGroup: string;
        readonly localisedName: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionGroup: RegionGroups.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default CampaignMapWindsOfMagicAreas;
