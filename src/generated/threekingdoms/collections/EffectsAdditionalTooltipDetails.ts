
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";

export namespace EffectsAdditionalTooltipDetails {
  export const KEY = new CollectionKey("effects_additional_tooltip_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly localisedDescription: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
  }
}

export default EffectsAdditionalTooltipDetails;
