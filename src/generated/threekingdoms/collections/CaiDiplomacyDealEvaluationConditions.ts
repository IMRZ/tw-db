
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiDiplomacyDealEvaluationConditions {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiDiplomacyDealEvaluationConditions;
