
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsSubcultures } from "./CampaignBonusValueIdsSubcultures";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace EffectBonusValueSubcultureJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_subculture_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._subculture = values["subculture"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsSubcultures.Entry | undefined {
      const collection = <CampaignBonusValueIdsSubcultures.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsSubcultures.KEY, CampaignBonusValueIdsSubcultures.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default EffectBonusValueSubcultureJunctions;
