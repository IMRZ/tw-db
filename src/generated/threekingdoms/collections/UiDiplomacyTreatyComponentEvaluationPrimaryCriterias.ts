
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyDealEvaluationCriterionTypes } from "./CaiDiplomacyDealEvaluationCriterionTypes";

export namespace UiDiplomacyTreatyComponentEvaluationPrimaryCriterias {
  export const KEY = new CollectionKey("ui_diplomacy_treaty_component_evaluation_primary_criterias");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _criterionType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._criterionType = values["criterion_type"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get criterionType(): CaiDiplomacyDealEvaluationCriterionTypes.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationCriterionTypes.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationCriterionTypes.KEY, CaiDiplomacyDealEvaluationCriterionTypes.Entry);
      return collection.find(entry => entry.key === this._criterionType);
    }
  }
}

export default UiDiplomacyTreatyComponentEvaluationPrimaryCriterias;
