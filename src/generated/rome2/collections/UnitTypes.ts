
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitTypes {
  export const KEY = new CollectionKey("unit_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default UnitTypes;
