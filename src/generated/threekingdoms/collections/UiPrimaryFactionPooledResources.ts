
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PooledResources } from "./PooledResources";
import { Campaigns } from "./Campaigns";

export namespace UiPrimaryFactionPooledResources {
  export const KEY = new CollectionKey("ui_primary_faction_pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _pooledResource: string;
    readonly _optionalCampaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._pooledResource = values["pooled_resource"];
      this._optionalCampaignKey = values["optional_campaign_key"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
  }
}

export default UiPrimaryFactionPooledResources;
