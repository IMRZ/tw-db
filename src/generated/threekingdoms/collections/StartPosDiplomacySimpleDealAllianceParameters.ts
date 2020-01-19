
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { StartPosFactions } from "./StartPosFactions";

export namespace StartPosDiplomacySimpleDealAllianceParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_simple_deal_alliance_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _allianceFactionParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._allianceFactionParameter = values["alliance_faction_parameter"];
    }
    
    get deal(): StartPosDiplomacySimpleDeals.Entry | undefined {
      const collection = <StartPosDiplomacySimpleDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacySimpleDeals.KEY, StartPosDiplomacySimpleDeals.Entry);
      return collection.find(entry => entry._id === this._deal);
    }
    
    get allianceFactionParameter(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._allianceFactionParameter);
    }
  }
}

export default StartPosDiplomacySimpleDealAllianceParameters;
