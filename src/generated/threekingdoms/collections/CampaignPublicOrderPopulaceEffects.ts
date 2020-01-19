
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignPublicOrderPopulaceEffects {
  export const KEY = new CollectionKey("campaign_public_order_populace_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly populaceHappiness: string;
    readonly _effectBundle: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.populaceHappiness = values["populace_happiness"];
      this._effectBundle = values["effect_bundle"];
      this._group = values["group"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default CampaignPublicOrderPopulaceEffects;
