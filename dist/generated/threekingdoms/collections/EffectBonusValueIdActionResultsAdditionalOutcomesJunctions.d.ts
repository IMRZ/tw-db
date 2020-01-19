import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsActionResultsAdditionalOutcomes } from "./CampaignBonusValueIdsActionResultsAdditionalOutcomes";
import { ActionResultsAdditionalOutcomes } from "./ActionResultsAdditionalOutcomes";
export declare namespace EffectBonusValueIdActionResultsAdditionalOutcomesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _actionResultsAdditionalOutcomeRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsActionResultsAdditionalOutcomes.Entry | undefined;
        get actionResultsAdditionalOutcomeRecord(): ActionResultsAdditionalOutcomes.Entry | undefined;
    }
}
export default EffectBonusValueIdActionResultsAdditionalOutcomesJunctions;
