
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";

export namespace StartPosDiplomacyComplexDealComponentValueParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_component_value_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly valueParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this.valueParameter = values["value_parameter"];
    }
    
    get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDealComponents.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDealComponents.KEY, StartPosDiplomacyComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
  }
}

export default StartPosDiplomacyComplexDealComponentValueParameters;
