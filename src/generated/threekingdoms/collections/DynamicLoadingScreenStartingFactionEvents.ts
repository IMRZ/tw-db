
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { DynamicLoadingScreenEvents } from "./DynamicLoadingScreenEvents";
import { Campaigns } from "./Campaigns";

export namespace DynamicLoadingScreenStartingFactionEvents {
  export const KEY = new CollectionKey("dynamic_loading_screen_starting_faction_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _loadingScreenEvent: string;
    readonly _campaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._loadingScreenEvent = values["loading_screen_event"];
      this._campaignKey = values["campaign_key"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get loadingScreenEvent(): DynamicLoadingScreenEvents.Entry | undefined {
      const collection = <DynamicLoadingScreenEvents.Entry[]>this.collectionCache.getCollection(DynamicLoadingScreenEvents.KEY, DynamicLoadingScreenEvents.Entry);
      return collection.find(entry => entry.key === this._loadingScreenEvent);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default DynamicLoadingScreenStartingFactionEvents;
