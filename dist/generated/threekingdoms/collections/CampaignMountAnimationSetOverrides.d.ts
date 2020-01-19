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
        constructor(collectionCache: CollectionCache, values: any);
        get characterAnimationSet(): CampaignAnimSetEnums.Entry | undefined;
        get mountUnit(): MainUnits.Entry | undefined;
        get riderAnimationSet(): CampaignAnimSetEnums.Entry | undefined;
    }
}
export default CampaignMountAnimationSetOverrides;
