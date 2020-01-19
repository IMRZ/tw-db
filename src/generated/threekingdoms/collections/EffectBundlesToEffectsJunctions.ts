
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { EffectBundleAdvancementStages } from "./EffectBundleAdvancementStages";

export namespace EffectBundlesToEffectsJunctions {
  export const KEY = new CollectionKey("effect_bundles_to_effects_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectBundleKey: string;
    readonly _effectKey: string;
    readonly value: number;
    readonly _effectScope: string;
    readonly _advancementStage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectBundleKey = values["effect_bundle_key"];
      this._effectKey = values["effect_key"];
      this.value = values["value"];
      this._effectScope = values["effect_scope"];
      this._advancementStage = values["advancement_stage"];
    }
    
    get effectBundleKey(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundleKey);
    }
    
    get effectKey(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectKey);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
    
    get advancementStage(): EffectBundleAdvancementStages.Entry | undefined {
      const collection = <EffectBundleAdvancementStages.Entry[]>this.collectionCache.getCollection(EffectBundleAdvancementStages.KEY, EffectBundleAdvancementStages.Entry);
      return collection.find(entry => entry.key === this._advancementStage);
    }
  }
}

export default EffectBundlesToEffectsJunctions;
