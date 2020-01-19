
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcUnrestDemands {
  export const KEY = new CollectionKey("TExc_unrest_demands");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly demand: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.demand = values["demand"];
    }
    
  }
}

export default TExcUnrestDemands;
