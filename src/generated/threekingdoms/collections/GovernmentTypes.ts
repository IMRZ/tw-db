
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GovernmentTypes {
  export const KEY = new CollectionKey("government_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly governmentType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.governmentType = values["government_type"];
    }
    
  }
}

export default GovernmentTypes;
