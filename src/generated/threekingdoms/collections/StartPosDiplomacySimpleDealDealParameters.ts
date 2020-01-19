
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";

export namespace StartPosDiplomacySimpleDealDealParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_simple_deal_deal_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _dealParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._dealParameter = values["deal_parameter"];
    }
    
    get deal(): StartPosDiplomacySimpleDeals.Entry | undefined {
      const collection = <StartPosDiplomacySimpleDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacySimpleDeals.KEY, StartPosDiplomacySimpleDeals.Entry);
      return collection.find(entry => entry._id === this._deal);
    }
    
    get dealParameter(): StartPosDiplomacyDeals.Entry | undefined {
      const collection = <StartPosDiplomacyDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDeals.KEY, StartPosDiplomacyDeals.Entry);
      return collection.find(entry => entry.id === this._dealParameter);
    }
  }
}

export default StartPosDiplomacySimpleDealDealParameters;
