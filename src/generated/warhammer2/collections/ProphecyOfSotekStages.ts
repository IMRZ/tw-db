
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { SotekTooltipTypes } from "./SotekTooltipTypes";

export namespace ProphecyOfSotekStages {
  export const KEY = new CollectionKey("prophecy_of_sotek_stages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly stage: string;
    readonly _effectBundle: string;
    readonly localisedName: string;
    readonly localisedDescription: string;
    readonly order: number;
    readonly _tooltipType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.stage = values["stage"];
      this._effectBundle = values["effect_bundle"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this.order = values["order"];
      this._tooltipType = values["tooltip_type"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get tooltipType(): SotekTooltipTypes.Entry | undefined {
      const collection = <SotekTooltipTypes.Entry[]>this.collectionCache.getCollection(SotekTooltipTypes.KEY, SotekTooltipTypes.Entry);
      return collection.find(entry => entry.type === this._tooltipType);
    }
  }
}

export default ProphecyOfSotekStages;
