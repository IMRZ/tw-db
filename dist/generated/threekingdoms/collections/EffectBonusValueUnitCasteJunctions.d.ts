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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsUnitCaste.Entry | undefined;
        get caste(): UnitCastes.Entry | undefined;
    }
}
export default EffectBonusValueUnitCasteJunctions;
