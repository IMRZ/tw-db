
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeObjects } from "./CampaignEffectScopeObjects";
import { CampaignEffectScopeOwnerships } from "./CampaignEffectScopeOwnerships";
import { CampaignEffectScopeLocations } from "./CampaignEffectScopeLocations";

export namespace CampaignEffectScopes {
  export const KEY = new CollectionKey("campaign_effect_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedText: string;
    readonly order: number;
    readonly _source: string;
    readonly _target: string;
    readonly _ownership: string;
    readonly _location: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedText = values["localised_text"];
      this.order = values["order"];
      this._source = values["source"];
      this._target = values["target"];
      this._ownership = values["ownership"];
      this._location = values["location"];
    }
    
    get source(): CampaignEffectScopeObjects.Entry | undefined {
      const collection = <CampaignEffectScopeObjects.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeObjects.KEY, CampaignEffectScopeObjects.Entry);
      return collection.find(entry => entry.key === this._source);
    }
    
    get target(): CampaignEffectScopeObjects.Entry | undefined {
      const collection = <CampaignEffectScopeObjects.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeObjects.KEY, CampaignEffectScopeObjects.Entry);
      return collection.find(entry => entry.key === this._target);
    }
    
    get ownership(): CampaignEffectScopeOwnerships.Entry | undefined {
      const collection = <CampaignEffectScopeOwnerships.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeOwnerships.KEY, CampaignEffectScopeOwnerships.Entry);
      return collection.find(entry => entry.key === this._ownership);
    }
    
    get location(): CampaignEffectScopeLocations.Entry | undefined {
      const collection = <CampaignEffectScopeLocations.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeLocations.KEY, CampaignEffectScopeLocations.Entry);
      return collection.find(entry => entry.key === this._location);
    }
  }
}

export default CampaignEffectScopes;
