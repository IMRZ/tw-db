
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";

export namespace StartPosDiplomacySimpleDealValueParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_simple_deal_value_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly valueParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this.valueParameter = values["value_parameter"];
    }
    
    get deal(): StartPosDiplomacySimpleDeals.Entry | undefined {
      const collection = <StartPosDiplomacySimpleDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacySimpleDeals.KEY, StartPosDiplomacySimpleDeals.Entry);
      return collection.find(entry => entry._id === this._deal);
    }
  }
}

export default StartPosDiplomacySimpleDealValueParameters;
