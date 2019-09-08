
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcUnrestCauses {
  export const KEY = new CollectionKey("TExc_unrest_causes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly cause: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.cause = values["cause"];
    }
    
  }
}

export default TExcUnrestCauses;
