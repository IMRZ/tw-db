
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { StartPosFactions } from "./StartPosFactions";

export namespace StartPosDiplomacySimpleDealFactionParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_simple_deal_faction_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _factionParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._factionParameter = values["faction_parameter"];
    }
    
    get deal(): StartPosDiplomacySimpleDeals.Entry | undefined {
      const collection = <StartPosDiplomacySimpleDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacySimpleDeals.KEY, StartPosDiplomacySimpleDeals.Entry);
      return collection.find(entry => entry._id === this._deal);
    }
    
    get factionParameter(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._factionParameter);
    }
  }
}

export default StartPosDiplomacySimpleDealFactionParameters;
