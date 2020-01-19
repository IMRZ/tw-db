
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAreasOfInterest } from "./CampaignAreasOfInterest";
import { Regions } from "./Regions";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignAreaOfInterestEffectBundles {
  export const KEY = new CollectionKey("campaign_area_of_interest_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignAreaOfInterest: string;
    readonly _region: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignAreaOfInterest = values["campaign_area_of_interest"];
      this._region = values["region"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get campaignAreaOfInterest(): CampaignAreasOfInterest.Entry | undefined {
      const collection = <CampaignAreasOfInterest.Entry[]>this.collectionCache.getCollection(CampaignAreasOfInterest.KEY, CampaignAreasOfInterest.Entry);
      return collection.find(entry => entry.key === this._campaignAreaOfInterest);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default CampaignAreaOfInterestEffectBundles;
