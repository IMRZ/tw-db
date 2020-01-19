
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealEvaluationComponentCriterionVariableTypes } from "./CaiDiplomacyDealEvaluationComponentCriterionVariableTypes";
import { CaiDiplomacyDealEvaluationConditions } from "./CaiDiplomacyDealEvaluationConditions";
import { CaiDiplomacyDealEvaluationEventsToCalculate } from "./CaiDiplomacyDealEvaluationEventsToCalculate";

export namespace CaiDiplomacyDealEvaluationComponentCriterionVariables {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_component_criterion_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _variableType: string;
    readonly shouldNegate: boolean;
    readonly _conditions: string;
    readonly _eventsToCalculate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._variableType = values["variable_type"];
      this.shouldNegate = !!values["should_negate"];
      this._conditions = values["conditions"];
      this._eventsToCalculate = values["events_to_calculate"];
    }
    
    get variableType(): CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.KEY, CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry);
      return collection.find(entry => entry.key === this._variableType);
    }
    
    get conditions(): CaiDiplomacyDealEvaluationConditions.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationConditions.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationConditions.KEY, CaiDiplomacyDealEvaluationConditions.Entry);
      return collection.find(entry => entry.key === this._conditions);
    }
    
    get eventsToCalculate(): CaiDiplomacyDealEvaluationEventsToCalculate.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationEventsToCalculate.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationEventsToCalculate.KEY, CaiDiplomacyDealEvaluationEventsToCalculate.Entry);
      return collection.find(entry => entry.key === this._eventsToCalculate);
    }
  }
}

export default CaiDiplomacyDealEvaluationComponentCriterionVariables;
