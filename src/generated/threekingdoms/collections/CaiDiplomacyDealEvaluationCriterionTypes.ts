
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiDiplomacyDealEvaluationCriterionTypes {
  export const KEY = new CollectionKey("cai_diplomacy_deal_evaluation_criterion_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _displayName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._displayName = values["display_name"];
    }
    
    get displayName(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayName);
    }
  }
}

export default CaiDiplomacyDealEvaluationCriterionTypes;
