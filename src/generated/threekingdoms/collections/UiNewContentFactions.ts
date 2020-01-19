
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

export namespace UiNewContentFactions {
  export const KEY = new CollectionKey("ui_new_content_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly layoutPath: string;
    readonly _optionalCampaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this.layoutPath = values["layout_path"];
      this._optionalCampaignKey = values["optional_campaign_key"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
  }
}

export default UiNewContentFactions;
