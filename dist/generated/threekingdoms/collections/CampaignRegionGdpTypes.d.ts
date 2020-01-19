import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRegionGdpCategories } from "./CampaignRegionGdpCategories";
export declare namespace CampaignRegionGdpTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: string;
        readonly affectedByFertility: boolean;
        readonly affectedBySeaRegionControl: boolean;
        readonly contributesToLandRaidsAsTrade: boolean;
        readonly contributesToLandRaidsAsNonTrade: boolean;
        readonly contributesToSeaRaidsAsTrade: boolean;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CampaignRegionGdpCategories.Entry | undefined;
    }
}
export default CampaignRegionGdpTypes;
