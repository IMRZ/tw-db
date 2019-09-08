
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsTechnologies } from "./CampaignBonusValueIdsTechnologies";
import { Technologies } from "./Technologies";

export namespace EffectBonusValueTechnologyJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_technology_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _technology: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._technology = values["technology"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsTechnologies.Entry | undefined {
      const collection = <CampaignBonusValueIdsTechnologies.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsTechnologies.KEY, CampaignBonusValueIdsTechnologies.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
  }
}

export default EffectBonusValueTechnologyJunctions;
