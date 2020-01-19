
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CursorMouseEvents {
  export const KEY = new CollectionKey("cursor_mouse_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CursorMouseEvents;
