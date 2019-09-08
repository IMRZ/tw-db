import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsProvincialInitiativeEffectRecords } from "./CampaignBonusValueIdsProvincialInitiativeEffectRecords";
export declare namespace EffectBonusValueProvincialInitiativeEffectRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _effectBonusWillModify: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsProvincialInitiativeEffectRecords.Entry | undefined;
        readonly effectBonusWillModify: Effects.Entry | undefined;
    }
}
export default EffectBonusValueProvincialInitiativeEffectRecordJunctions;
