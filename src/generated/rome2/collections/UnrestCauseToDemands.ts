
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcUnrestCauses } from "./TExcUnrestCauses";
import { TExcUnrestDemands } from "./TExcUnrestDemands";

export namespace UnrestCauseToDemands {
  export const KEY = new CollectionKey("unrest_cause_to_demands");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _cause: string;
    readonly levelOfUnrest: string;
    readonly _demand: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._cause = values["cause"];
      this.levelOfUnrest = values["level_of_unrest"];
      this._demand = values["demand"];
    }
    
    get cause(): TExcUnrestCauses.Entry | undefined {
      const collection = <TExcUnrestCauses.Entry[]>this.collectionCache.getCollection(TExcUnrestCauses.KEY, TExcUnrestCauses.Entry);
      return collection.find(entry => entry.cause === this._cause);
    }
    
    get demand(): TExcUnrestDemands.Entry | undefined {
      const collection = <TExcUnrestDemands.Entry[]>this.collectionCache.getCollection(TExcUnrestDemands.KEY, TExcUnrestDemands.Entry);
      return collection.find(entry => entry.demand === this._demand);
    }
  }
}

export default UnrestCauseToDemands;
