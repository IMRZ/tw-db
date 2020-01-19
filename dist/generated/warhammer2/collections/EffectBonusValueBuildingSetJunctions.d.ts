import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBuildingSets } from "./CampaignBonusValueIdsBuildingSets";
import { BuildingSets } from "./BuildingSets";
export declare namespace EffectBonusValueBuildingSetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _buildingSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsBuildingSets.Entry | undefined;
        get buildingSet(): BuildingSets.Entry | undefined;
    }
}
export default EffectBonusValueBuildingSetJunctions;
