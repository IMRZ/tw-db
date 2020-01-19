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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsProvincialInitiativeEffectRecords.Entry | undefined;
        get effectBonusWillModify(): Effects.Entry | undefined;
    }
}
export default EffectBonusValueProvincialInitiativeEffectRecordJunctions;
