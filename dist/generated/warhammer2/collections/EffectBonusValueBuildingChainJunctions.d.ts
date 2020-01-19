import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBuildingChain } from "./CampaignBonusValueIdsBuildingChain";
import { BuildingChains } from "./BuildingChains";
export declare namespace EffectBonusValueBuildingChainJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _buildingChain: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsBuildingChain.Entry | undefined;
        get buildingChain(): BuildingChains.Entry | undefined;
    }
}
export default EffectBonusValueBuildingChainJunctions;
