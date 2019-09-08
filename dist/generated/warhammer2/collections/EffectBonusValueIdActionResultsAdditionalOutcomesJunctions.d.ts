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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsActionResultsAdditionalOutcomes.Entry | undefined;
        readonly actionResultsAdditionalOutcomeRecord: ActionResultsAdditionalOutcomes.Entry | undefined;
    }
}
export default EffectBonusValueIdActionResultsAdditionalOutcomesJunctions;
