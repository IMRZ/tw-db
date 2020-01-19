
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealEvaluationFactorTypes } from "./CaiDiplomacyDealEvaluationFactorTypes";
import { CaiDiplomacyDealEvaluationCriterionTypes } from "./CaiDiplomacyDealEvaluationCriterionTypes";

export namespace CaiDiplomacyDealEvaluationFactorAndCriterionJunctions {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_factor_and_criterion_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factor: string;
    readonly _criterion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factor = values["factor"];
      this._criterion = values["criterion"];
    }
    
    get factor(): CaiDiplomacyDealEvaluationFactorTypes.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationFactorTypes.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationFactorTypes.KEY, CaiDiplomacyDealEvaluationFactorTypes.Entry);
      return collection.find(entry => entry.key === this._factor);
    }
    
    get criterion(): CaiDiplomacyDealEvaluationCriterionTypes.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationCriterionTypes.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationCriterionTypes.KEY, CaiDiplomacyDealEvaluationCriterionTypes.Entry);
      return collection.find(entry => entry.key === this._criterion);
    }
  }
}

export default CaiDiplomacyDealEvaluationFactorAndCriterionJunctions;
