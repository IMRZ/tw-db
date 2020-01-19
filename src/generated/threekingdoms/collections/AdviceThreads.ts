
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AdviceThreads {
  export const KEY = new CollectionKey("advice_threads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly thread: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.thread = values["thread"];
    }
    
  }
}

export default AdviceThreads;
