
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Genders {
  export const KEY = new CollectionKey("genders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly gender: string;
    readonly onscreen: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.gender = values["gender"];
      this.onscreen = values["onscreen"];
    }
    
  }
}

export default Genders;
