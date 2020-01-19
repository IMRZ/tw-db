import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapMasks } from "./CampaignMapMasks";
import { Regions } from "./Regions";
export declare namespace CampaignMapMasksToExcludedRegions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mask: string;
        readonly _excludedRegion: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mask(): CampaignMapMasks.Entry | undefined;
        get excludedRegion(): Regions.Entry | undefined;
    }
}
export default CampaignMapMasksToExcludedRegions;
