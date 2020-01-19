import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Campaigns } from "./Campaigns";
import { Religions } from "./Religions";
export declare namespace RegionCampaignOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _campaign: string;
        readonly _religion: string;
        readonly religionZeal: number;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): Regions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
        get religion(): Religions.Entry | undefined;
    }
}
export default RegionCampaignOverrides;
