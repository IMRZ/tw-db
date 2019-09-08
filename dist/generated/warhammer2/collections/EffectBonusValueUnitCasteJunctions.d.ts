import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitCaste } from "./CampaignBonusValueIdsUnitCaste";
import { UnitCastes } from "./UnitCastes";
export declare namespace EffectBonusValueUnitCasteJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _caste: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsUnitCaste.Entry | undefined;
        readonly caste: UnitCastes.Entry | undefined;
    }
}
export default EffectBonusValueUnitCasteJunctions;
