
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiValueSets } from "./CaiValueSets";

export namespace CaiPersonalityDealEvaluationTreatyComponentValues {
  export const KEY = new CollectionKey("cai_personality_deal_evaluation_treaty_component_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentKey: string;
    readonly _treatyComponentKey: string;
    readonly _valueSetKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentKey = values["component_key"];
      this._treatyComponentKey = values["treaty_component_key"];
      this._valueSetKey = values["value_set_key"];
    }
    
    get componentKey(): CaiPersonalityDealEvaluationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealEvaluationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealEvaluationComponents.KEY, CaiPersonalityDealEvaluationComponents.Entry);
      return collection.find(entry => entry.id === this._componentKey);
    }
    
    get treatyComponentKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponentKey);
    }
    
    get valueSetKey(): CaiValueSets.Entry | undefined {
      const collection = <CaiValueSets.Entry[]>this.collectionCache.getCollection(CaiValueSets.KEY, CaiValueSets.Entry);
      return collection.find(entry => entry.key === this._valueSetKey);
    }
  }
}

export default CaiPersonalityDealEvaluationTreatyComponentValues;
