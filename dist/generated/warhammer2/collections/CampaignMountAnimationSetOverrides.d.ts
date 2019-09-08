import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { MainUnits } from "./MainUnits";
export declare namespace CampaignMountAnimationSetOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterAnimationSet: string;
        readonly _mountUnit: string;
        readonly _riderAnimationSet: string;
        readonly vfxFilterOverride: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly characterAnimationSet: CampaignAnimSetEnums.Entry | undefined;
        readonly mountUnit: MainUnits.Entry | undefined;
        readonly riderAnimationSet: CampaignAnimSetEnums.Entry | undefined;
    }
}
export default CampaignMountAnimationSetOverrides;
