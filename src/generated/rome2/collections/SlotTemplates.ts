
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SlotTemplates {
  export const KEY = new CollectionKey("slot_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default SlotTemplates;
