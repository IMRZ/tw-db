
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityDealEvaluationDealComponentNames {
  export const KEY = new CollectionKey("cai_personality_deal_evaluation_deal_component_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CaiPersonalityDealEvaluationDealComponentNames;
