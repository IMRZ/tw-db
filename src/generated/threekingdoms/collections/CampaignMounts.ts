
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { Variants } from "./Variants";

export namespace CampaignMounts {
  export const KEY = new CollectionKey("campaign_mounts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly model: string;
    readonly _animationSet: string;
    readonly _variant: string;
    readonly scale: number;
    readonly ignoreRiderVariantScale: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.model = values["model"];
      this._animationSet = values["animation_set"];
      this._variant = values["variant"];
      this.scale = values["scale"];
      this.ignoreRiderVariantScale = !!values["ignore_rider_variant_scale"];
    }
    
    get animationSet(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._animationSet);
    }
    
    get variant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variant);
    }
  }
}

export default CampaignMounts;
