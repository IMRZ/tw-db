
import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedEvents } from "./EventFeedEvents";
import { EventFeedGroups } from "./EventFeedGroups";
import { CampaignGroups } from "./CampaignGroups";
import { EventFeedStrings } from "./EventFeedStrings";
import { MessageEventLayoutTypes } from "./MessageEventLayoutTypes";

export namespace EventFeedMessageEvents {
  export const KEY = new CollectionKey("event_feed_message_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly _target: string;
    readonly _group: string;
    readonly _secondaryDetail: string;
    readonly _flavourText: string;
    readonly image: string;
    readonly _layout: string;
    readonly _layoutData: string;
    readonly soundEvent: string;
    readonly _contextLocated: string;
    readonly overrideIcon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this._target = values["target"];
      this._group = values["group"];
      this._secondaryDetail = values["secondary_detail"];
      this._flavourText = values["flavour_text"];
      this.image = values["image"];
      this._layout = values["layout"];
      this._layoutData = values["layout_data"];
      this.soundEvent = values["sound_event"];
      this._contextLocated = values["context_located"];
      this.overrideIcon = values["override_icon"];
    }
    
    get event(): EventFeedEvents.Entry | undefined {
      const collection = <EventFeedEvents.Entry[]>this.collectionCache.getCollection(EventFeedEvents.KEY, EventFeedEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
    
    get target(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._target);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get secondaryDetail(): EventFeedStrings.Entry | undefined {
      const collection = <EventFeedStrings.Entry[]>this.collectionCache.getCollection(EventFeedStrings.KEY, EventFeedStrings.Entry);
      return collection.find(entry => entry.key === this._secondaryDetail);
    }
    
    get flavourText(): EventFeedStrings.Entry | undefined {
      const collection = <EventFeedStrings.Entry[]>this.collectionCache.getCollection(EventFeedStrings.KEY, EventFeedStrings.Entry);
      return collection.find(entry => entry.key === this._flavourText);
    }
    
    get layout(): MessageEventLayoutTypes.Entry | undefined {
      const collection = <MessageEventLayoutTypes.Entry[]>this.collectionCache.getCollection(MessageEventLayoutTypes.KEY, MessageEventLayoutTypes.Entry);
      return collection.find(entry => entry.type === this._layout);
    }
    
    get layoutData(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._layoutData);
    }
    
    get contextLocated(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._contextLocated);
    }
  }
}

export default EventFeedMessageEvents;
