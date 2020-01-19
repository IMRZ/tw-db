
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MessageEventLayoutTypes {
  export const KEY = new CollectionKey("message_event_layout_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["Type"];
    }
    
  }
}

export default MessageEventLayoutTypes;
