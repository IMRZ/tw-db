
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PoliticsGovernmentTypes {
  export const KEY = new CollectionKey("politics_government_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly governmentType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.governmentType = values["government_type"];
    }
    
  }
}

export default PoliticsGovernmentTypes;
