import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAttritionRecords } from "./CampaignBonusValueIdsAttritionRecords";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
export declare namespace EffectBonusValueAttritionRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _attritionRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsAttritionRecords.Entry | undefined;
        readonly attritionRecord: CampaignMapAttritions.Entry | undefined;
    }
}
export default EffectBonusValueAttritionRecordJunctions;
