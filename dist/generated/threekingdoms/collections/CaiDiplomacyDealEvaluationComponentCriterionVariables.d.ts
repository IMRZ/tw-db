import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealEvaluationComponentCriterionVariableTypes } from "./CaiDiplomacyDealEvaluationComponentCriterionVariableTypes";
import { CaiDiplomacyDealEvaluationConditions } from "./CaiDiplomacyDealEvaluationConditions";
import { CaiDiplomacyDealEvaluationEventsToCalculate } from "./CaiDiplomacyDealEvaluationEventsToCalculate";
export declare namespace CaiDiplomacyDealEvaluationComponentCriterionVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _variableType: string;
        readonly shouldNegate: boolean;
        readonly _conditions: string;
        readonly _eventsToCalculate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get variableType(): CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry | undefined;
        get conditions(): CaiDiplomacyDealEvaluationConditions.Entry | undefined;
        get eventsToCalculate(): CaiDiplomacyDealEvaluationEventsToCalculate.Entry | undefined;
    }
}
export default CaiDiplomacyDealEvaluationComponentCriterionVariables;
