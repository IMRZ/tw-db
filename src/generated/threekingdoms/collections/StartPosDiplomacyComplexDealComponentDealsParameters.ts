
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";

export namespace StartPosDiplomacyComplexDealComponentDealsParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_component_deals_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _dealParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._dealParameter = values["deal_parameter"];
    }
    
    get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDealComponents.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDealComponents.KEY, StartPosDiplomacyComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get dealParameter(): StartPosDiplomacyDeals.Entry | undefined {
      const collection = <StartPosDiplomacyDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDeals.KEY, StartPosDiplomacyDeals.Entry);
      return collection.find(entry => entry.id === this._dealParameter);
    }
  }
}

export default StartPosDiplomacyComplexDealComponentDealsParameters;
