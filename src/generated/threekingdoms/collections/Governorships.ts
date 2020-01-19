
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Governorships {
  export const KEY = new CollectionKey("governorships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly governorship: string;
    readonly onscreen: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.governorship = values["governorship"];
      this.onscreen = values["onscreen"];
    }
    
  }
}

export default Governorships;
