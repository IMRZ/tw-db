
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiAspects {
  export const KEY = new CollectionKey("cai_aspects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly aspect: string;
    readonly defaultWeighting: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.aspect = values["aspect"];
      this.defaultWeighting = values["default_weighting"];
    }
    
  }
}

export default CaiAspects;
