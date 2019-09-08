
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsRituals } from "./CampaignBonusValueIdsRituals";
import { Rituals } from "./Rituals";

export namespace EffectBonusValueRitualJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_ritual_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _ritual: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._ritual = values["ritual"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsRituals.Entry | undefined {
      const collection = <CampaignBonusValueIdsRituals.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsRituals.KEY, CampaignBonusValueIdsRituals.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default EffectBonusValueRitualJunctions;
