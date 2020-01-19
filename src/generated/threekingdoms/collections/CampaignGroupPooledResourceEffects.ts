
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
import { PooledResourceEffectTypes } from "./PooledResourceEffectTypes";

export namespace CampaignGroupPooledResourceEffects {
  export const KEY = new CollectionKey("campaign_group_pooled_resource_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _effectBundle: string;
    readonly _effectType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._effectBundle = values["effect_bundle"];
      this._effectType = values["effect_type"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get effectType(): PooledResourceEffectTypes.Entry | undefined {
      const collection = <PooledResourceEffectTypes.Entry[]>this.collectionCache.getCollection(PooledResourceEffectTypes.KEY, PooledResourceEffectTypes.Entry);
      return collection.find(entry => entry.key === this._effectType);
    }
  }
}

export default CampaignGroupPooledResourceEffects;
