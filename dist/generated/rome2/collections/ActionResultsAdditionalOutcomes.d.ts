import { CollectionCache, CollectionKey } from "../../../common";
import { ActionResults } from "./ActionResults";
import { ActionResultsAdditionalOutcomesEnums } from "./ActionResultsAdditionalOutcomesEnums";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace ActionResultsAdditionalOutcomes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _actionResultKey: string;
        readonly _outcome: string;
        readonly value: number;
        readonly _effectRecord: string;
        readonly _effectScopeRecord: string;
        readonly key: string;
        readonly opportuneFailureWeighting: number;
        readonly authorityValueCoefficient: number;
        readonly subterfugeValueCoefficient: number;
        readonly zealValueCoefficient: number;
        constructor(collectionCache: CollectionCache, values: any);
        get actionResultKey(): ActionResults.Entry | undefined;
        get outcome(): ActionResultsAdditionalOutcomesEnums.Entry | undefined;
        get effectRecord(): Effects.Entry | undefined;
        get effectScopeRecord(): CampaignEffectScopes.Entry | undefined;
    }
}
export default ActionResultsAdditionalOutcomes;
