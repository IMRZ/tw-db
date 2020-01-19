import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";
export declare namespace CampaignBuildingChainSlotUnlocks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingChain: string;
        readonly activeSlotCount: number;
        readonly level: number;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingChain(): BuildingChains.Entry | undefined;
    }
}
export default CampaignBuildingChainSlotUnlocks;
