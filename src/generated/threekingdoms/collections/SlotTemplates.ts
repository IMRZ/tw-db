
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";

export namespace SlotTemplates {
  export const KEY = new CollectionKey("slot_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _resource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._resource = values["resource"];
    }
    
    get resource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
  }
}

export default SlotTemplates;
