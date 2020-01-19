
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaTriggers {
  export const KEY = new CollectionKey("encyclopedia_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly componentKey: string;
    readonly url: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.componentKey = values["component_key"];
      this.url = values["url"];
    }
    
  }
}

export default EncyclopediaTriggers;
