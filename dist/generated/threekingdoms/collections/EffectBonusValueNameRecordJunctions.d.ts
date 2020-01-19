import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsNameRecords } from "./CampaignBonusValueIdsNameRecords";
import { Names } from "./Names";
export declare namespace EffectBonusValueNameRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _nameRecord: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsNameRecords.Entry | undefined;
        get nameRecord(): Names.Entry | undefined;
    }
}
export default EffectBonusValueNameRecordJunctions;
