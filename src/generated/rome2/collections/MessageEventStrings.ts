
import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";
import { Cultures } from "./Cultures";
import { MessageEventText } from "./MessageEventText";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace MessageEventStrings {
  export const KEY = new CollectionKey("message_event_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly _culture: string;
    readonly title: string;
    readonly _text: string;
    readonly image: string;
    readonly icon: string;
    readonly soundEvent: string;
    readonly _optionalCampaignKey: string;
    readonly _optionalSubculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this._culture = values["culture"];
      this.title = values["title"];
      this._text = values["text"];
      this.image = values["image"];
      this.icon = values["icon"];
      this.soundEvent = values["sound_event"];
      this._optionalCampaignKey = values["optional_campaign_key"];
      this._optionalSubculture = values["optional_subculture"];
    }
    
    get event(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get text(): MessageEventText.Entry | undefined {
      const collection = <MessageEventText.Entry[]>this.collectionCache.getCollection(MessageEventText.KEY, MessageEventText.Entry);
      return collection.find(entry => entry.key === this._text);
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
    
    get optionalSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._optionalSubculture);
    }
  }
}

export default MessageEventStrings;
