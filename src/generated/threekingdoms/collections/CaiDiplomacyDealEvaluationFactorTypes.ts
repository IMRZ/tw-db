
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiDiplomacyDealEvaluationFactorTypes {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_factor_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.order = values["order"];
    }
    
  }
}

export default CaiDiplomacyDealEvaluationFactorTypes;
