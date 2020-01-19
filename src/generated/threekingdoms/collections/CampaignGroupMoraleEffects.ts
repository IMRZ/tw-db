
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignGroupMoraleEffects {
  export const KEY = new CollectionKey("campaign_group_morale_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly _group: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this._group = values["group"];
      this._effectBundle = values["effect_bundle"];
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

export default CampaignGroupMoraleEffects;
