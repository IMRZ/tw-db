
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";

export namespace RegionEffectBundles {
  export const KEY = new CollectionKey("region_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _group: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._group = values["group"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default RegionEffectBundles;
