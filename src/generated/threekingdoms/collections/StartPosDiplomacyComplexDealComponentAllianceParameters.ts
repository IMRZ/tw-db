
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { StartPosFactions } from "./StartPosFactions";

export namespace StartPosDiplomacyComplexDealComponentAllianceParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_component_alliance_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _allianceFactionParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._allianceFactionParameter = values["alliance_faction_parameter"];
    }
    
    get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDealComponents.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDealComponents.KEY, StartPosDiplomacyComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get allianceFactionParameter(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._allianceFactionParameter);
    }
  }
}

export default StartPosDiplomacyComplexDealComponentAllianceParameters;
