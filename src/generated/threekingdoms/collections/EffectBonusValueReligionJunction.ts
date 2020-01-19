
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsReligion } from "./CampaignBonusValueIdsReligion";
import { Religions } from "./Religions";

export namespace EffectBonusValueReligionJunction {
  export const KEY = new CollectionKey("effect_bonus_value_religion_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _religion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._religion = values["religion"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsReligion.Entry | undefined {
      const collection = <CampaignBonusValueIdsReligion.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsReligion.KEY, CampaignBonusValueIdsReligion.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default EffectBonusValueReligionJunction;
