
import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";

export namespace CampaignSubjectMessages {
  export const KEY = new CollectionKey("campaign_subject_messages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _messageType: string;
    readonly optionalText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._messageType = values["message_type"];
      this.optionalText = values["optional_text"];
    }
    
    get messageType(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._messageType);
    }
  }
}

export default CampaignSubjectMessages;
