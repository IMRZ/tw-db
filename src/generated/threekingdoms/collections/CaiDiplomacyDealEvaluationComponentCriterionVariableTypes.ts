
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiDiplomacyDealEvaluationComponentCriterionVariableTypes {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_component_criterion_variable_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiDiplomacyDealEvaluationComponentCriterionVariableTypes;
