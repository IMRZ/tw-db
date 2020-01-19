
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDisplaySets } from "./UiDisplaySets";

export namespace UiDisplaySetItems {
  export const KEY = new CollectionKey("ui_display_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly image: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this.image = values["image"];
    }
    
    get set(): UiDisplaySets.Entry | undefined {
      const collection = <UiDisplaySets.Entry[]>this.collectionCache.getCollection(UiDisplaySets.KEY, UiDisplaySets.Entry);
      return collection.find(entry => entry.key === this._set);
    }
  }
}

export default UiDisplaySetItems;
