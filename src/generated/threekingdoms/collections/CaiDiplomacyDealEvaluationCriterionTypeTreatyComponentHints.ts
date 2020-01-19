
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CaiDiplomacyDealEvaluationCriterionTypeTreatyComponentHints {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_criterion_type_treaty_component_hints");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mainComponentKey: string;
    readonly _hintComponentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mainComponentKey = values["main_component_key"];
      this._hintComponentKey = values["hint_component_key"];
    }
    
    get mainComponentKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._mainComponentKey);
    }
    
    get hintComponentKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._hintComponentKey);
    }
  }
}

export default CaiDiplomacyDealEvaluationCriterionTypeTreatyComponentHints;
