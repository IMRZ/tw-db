
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsTechnologyCategories } from "./CampaignBonusValueIdsTechnologyCategories";
import { TechnologyCategories } from "./TechnologyCategories";

export namespace EffectBonusValueTechnologyCategoryJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_technology_category_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _technologyCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._technologyCategory = values["technology_category"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsTechnologyCategories.Entry | undefined {
      const collection = <CampaignBonusValueIdsTechnologyCategories.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsTechnologyCategories.KEY, CampaignBonusValueIdsTechnologyCategories.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get technologyCategory(): TechnologyCategories.Entry | undefined {
      const collection = <TechnologyCategories.Entry[]>this.collectionCache.getCollection(TechnologyCategories.KEY, TechnologyCategories.Entry);
      return collection.find(entry => entry.key === this._technologyCategory);
    }
  }
}

export default EffectBonusValueTechnologyCategoryJunctions;
