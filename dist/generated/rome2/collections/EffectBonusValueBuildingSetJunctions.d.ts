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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsBuildingSets.Entry | undefined;
        readonly buildingSet: BuildingSets.Entry | undefined;
    }
}
export default EffectBonusValueBuildingSetJunctions;
