
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PoliticsGovernmentActions {
  export const KEY = new CollectionKey("politics_government_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PoliticsGovernmentActions;
