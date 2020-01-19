import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealGenerationGoalNames } from "./CaiDiplomacyDealGenerationGoalNames";
export declare namespace CaiDiplomacyDealGenerationGoalFailingRelationships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectingGoalKey: string;
        readonly _effectedGoalKey: string;
        readonly effectingGoalFailed: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get effectingGoalKey(): CaiDiplomacyDealGenerationGoalNames.Entry | undefined;
        get effectedGoalKey(): CaiDiplomacyDealGenerationGoalNames.Entry | undefined;
    }
}
export default CaiDiplomacyDealGenerationGoalFailingRelationships;
