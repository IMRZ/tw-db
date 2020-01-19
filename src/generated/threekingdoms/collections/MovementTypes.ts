
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MovementTypes {
  export const KEY = new CollectionKey("movement_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default MovementTypes;
