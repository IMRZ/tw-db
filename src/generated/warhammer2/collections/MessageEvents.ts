
import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEventLayoutTypes } from "./MessageEventLayoutTypes";

export namespace MessageEvents {
  export const KEY = new CollectionKey("message_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly event: string;
    readonly _layout: string;
    readonly requiresResponse: boolean;
    readonly instantOpen: boolean;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.event = values["event"];
      this._layout = values["layout"];
      this.requiresResponse = !!values["requires_response"];
      this.instantOpen = !!values["instant_open"];
      this.priority = values["priority"];
    }
    
    get layout(): MessageEventLayoutTypes.Entry | undefined {
      const collection = <MessageEventLayoutTypes.Entry[]>this.collectionCache.getCollection(MessageEventLayoutTypes.KEY, MessageEventLayoutTypes.Entry);
      return collection.find(entry => entry.type === this._layout);
    }
  }
}

export default MessageEvents;
