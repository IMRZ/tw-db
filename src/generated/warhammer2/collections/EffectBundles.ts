
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundleTargets } from "./EffectBundleTargets";

export namespace EffectBundles {
  export const KEY = new CollectionKey("effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly uiIcon: string;
    readonly _bundleTarget: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.uiIcon = values["ui_icon"];
      this._bundleTarget = values["bundle_target"];
      this.priority = values["priority"];
    }
    
    get bundleTarget(): EffectBundleTargets.Entry | undefined {
      const collection = <EffectBundleTargets.Entry[]>this.collectionCache.getCollection(EffectBundleTargets.KEY, EffectBundleTargets.Entry);
      return collection.find(entry => entry.key === this._bundleTarget);
    }
  }
}

export default EffectBundles;
