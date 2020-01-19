
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitySurrenderComponents {
  export const KEY = new CollectionKey("cai_personality_surrender_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiPersonalitySurrenderComponents;
