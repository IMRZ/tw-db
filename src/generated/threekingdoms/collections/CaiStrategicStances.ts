
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiStrategicStances {
  export const KEY = new CollectionKey("cai_strategic_stances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiStrategicStances;
