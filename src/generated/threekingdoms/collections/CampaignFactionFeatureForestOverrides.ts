
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { FactionFeatureForests } from "./FactionFeatureForests";

export namespace CampaignFactionFeatureForestOverrides {
  export const KEY = new CollectionKey("campaign_faction_feature_forest_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly _faction: string;
    readonly _featureForest: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this._faction = values["faction"];
      this._featureForest = values["feature_forest"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get featureForest(): FactionFeatureForests.Entry | undefined {
      const collection = <FactionFeatureForests.Entry[]>this.collectionCache.getCollection(FactionFeatureForests.KEY, FactionFeatureForests.Entry);
      return collection.find(entry => entry.key === this._featureForest);
    }
  }
}

export default CampaignFactionFeatureForestOverrides;
