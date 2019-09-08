import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
import { CaiPersonalityDealEvaluationDealComponentNames } from "./CaiPersonalityDealEvaluationDealComponentNames";
export declare namespace CaiPersonalityDealEvaluationDealComponentValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _personalityComponent: string;
        readonly _dealComponent: string;
        readonly bestFriendsValue: number;
        readonly veryFriendlyValue: number;
        readonly friendlyValue: number;
        readonly neutralValue: number;
        readonly unfriendlyValue: number;
        readonly veryUnfriendlyValue: number;
        readonly bitterEnemiesValue: number;
        readonly lastStandBalanceFactor: number;
        readonly totalWarBalanceFactor: number;
        readonly warBalanceFactor: number;
        readonly tensionBalanceFactor: number;
        readonly peaceBalanceFactor: number;
        readonly treacheryValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly personalityComponent: CaiPersonalityDealEvaluationComponents.Entry | undefined;
        readonly dealComponent: CaiPersonalityDealEvaluationDealComponentNames.Entry | undefined;
    }
}
export default CaiPersonalityDealEvaluationDealComponentValues;
