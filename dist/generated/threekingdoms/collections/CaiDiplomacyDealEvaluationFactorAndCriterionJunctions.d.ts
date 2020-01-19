import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealEvaluationFactorTypes } from "./CaiDiplomacyDealEvaluationFactorTypes";
import { CaiDiplomacyDealEvaluationCriterionTypes } from "./CaiDiplomacyDealEvaluationCriterionTypes";
export declare namespace CaiDiplomacyDealEvaluationFactorAndCriterionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factor: string;
        readonly _criterion: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factor(): CaiDiplomacyDealEvaluationFactorTypes.Entry | undefined;
        get criterion(): CaiDiplomacyDealEvaluationCriterionTypes.Entry | undefined;
    }
}
export default CaiDiplomacyDealEvaluationFactorAndCriterionJunctions;
