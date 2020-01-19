
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldCivilianTypes {
  export const KEY = new CollectionKey("battlefield_civilian_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattlefieldCivilianTypes;
