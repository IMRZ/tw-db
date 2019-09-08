
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PlagueTypes {
  export const KEY = new CollectionKey("plague_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default PlagueTypes;
