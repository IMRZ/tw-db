
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundleTargets } from "./EffectBundleTargets";
import { UiEffectBundleTypeEnums } from "./UiEffectBundleTypeEnums";

export namespace EffectBundles {
  export const KEY = new CollectionKey("effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly uiIcon: string;
    readonly _bundleTarget: string;
    readonly _iconSupplementColourType: string;
    readonly showInGenericBundleDisplay: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.uiIcon = values["ui_icon"];
      this._bundleTarget = values["bundle_target"];
      this._iconSupplementColourType = values["icon_supplement_colour_type"];
      this.showInGenericBundleDisplay = !!values["show_in_generic_bundle_display"];
    }
    
    get bundleTarget(): EffectBundleTargets.Entry | undefined {
      const collection = <EffectBundleTargets.Entry[]>this.collectionCache.getCollection(EffectBundleTargets.KEY, EffectBundleTargets.Entry);
      return collection.find(entry => entry.key === this._bundleTarget);
    }
    
    get iconSupplementColourType(): UiEffectBundleTypeEnums.Entry | undefined {
      const collection = <UiEffectBundleTypeEnums.Entry[]>this.collectionCache.getCollection(UiEffectBundleTypeEnums.KEY, UiEffectBundleTypeEnums.Entry);
      return collection.find(entry => entry.type === this._iconSupplementColourType);
    }
  }
}

export default EffectBundles;
