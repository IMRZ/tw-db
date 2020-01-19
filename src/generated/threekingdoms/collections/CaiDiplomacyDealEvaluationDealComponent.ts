
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyDealEvaluationCriterionTypes } from "./CaiDiplomacyDealEvaluationCriterionTypes";
import { CaiDiplomacyDealEvaluationComponentCriterionVariableTypes } from "./CaiDiplomacyDealEvaluationComponentCriterionVariableTypes";

export namespace CaiDiplomacyDealEvaluationDealComponent {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_deal_component");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _criterionType: string;
    readonly _componentCriterionVariableType: string;
    readonly negate: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._criterionType = values["criterion_type"];
      this._componentCriterionVariableType = values["component_criterion_variable_type"];
      this.negate = !!values["negate"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get criterionType(): CaiDiplomacyDealEvaluationCriterionTypes.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationCriterionTypes.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationCriterionTypes.KEY, CaiDiplomacyDealEvaluationCriterionTypes.Entry);
      return collection.find(entry => entry.key === this._criterionType);
    }
    
    get componentCriterionVariableType(): CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.KEY, CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry);
      return collection.find(entry => entry.key === this._componentCriterionVariableType);
    }
  }
}

export default CaiDiplomacyDealEvaluationDealComponent;
