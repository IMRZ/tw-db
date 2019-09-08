
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsDilemmaOptions {
  export const KEY = new CollectionKey("cdir_events_dilemma_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly optionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.optionKey = values["option_key"];
    }
    
  }
}

export default CdirEventsDilemmaOptions;
