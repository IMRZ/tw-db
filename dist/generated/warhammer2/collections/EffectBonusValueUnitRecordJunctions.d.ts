import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitRecords } from "./CampaignBonusValueIdsUnitRecords";
import { MainUnits } from "./MainUnits";
export declare namespace EffectBonusValueUnitRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _unitRecordKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsUnitRecords.Entry | undefined;
        get unitRecordKey(): MainUnits.Entry | undefined;
    }
}
export default EffectBonusValueUnitRecordJunctions;
