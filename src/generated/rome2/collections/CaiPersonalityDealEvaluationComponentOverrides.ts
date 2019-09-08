
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";

export namespace CaiPersonalityDealEvaluationComponentOverrides {
  export const KEY = new CollectionKey("cai_personality_deal_evaluation_component_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this._parent = values["parent"];
    }
    
    get component(): CaiPersonalityDealEvaluationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealEvaluationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealEvaluationComponents.KEY, CaiPersonalityDealEvaluationComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get parent(): CaiPersonalityDealEvaluationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealEvaluationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealEvaluationComponents.KEY, CaiPersonalityDealEvaluationComponents.Entry);
      return collection.find(entry => entry.id === this._parent);
    }
  }
}

export default CaiPersonalityDealEvaluationComponentOverrides;
