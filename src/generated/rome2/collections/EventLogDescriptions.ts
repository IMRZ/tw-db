
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace EventLogDescriptions {
  export const KEY = new CollectionKey("event_log_descriptions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly eventKey: string;
    readonly eventTitle: string;
    readonly eventContent: string;
    readonly icon: string;
    readonly hasPosition: boolean;
    readonly isRegionPosition: boolean;
    readonly notes: string;
    readonly _optionalCampaignKey: string;
    readonly movieId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.eventKey = values["event_key"];
      this.eventTitle = values["event_title"];
      this.eventContent = values["event_content"];
      this.icon = values["icon"];
      this.hasPosition = !!values["has_position"];
      this.isRegionPosition = !!values["is_region_position"];
      this.notes = values["notes"];
      this._optionalCampaignKey = values["optional_campaign_key"];
      this.movieId = values["movie_id"];
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
  }
}

export default EventLogDescriptions;
