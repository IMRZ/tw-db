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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsNameRecords.Entry | undefined;
        readonly nameRecord: Names.Entry | undefined;
    }
}
export default EffectBonusValueNameRecordJunctions;
