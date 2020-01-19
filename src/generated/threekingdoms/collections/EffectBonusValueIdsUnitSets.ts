
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitSets } from "./CampaignBonusValueIdsUnitSets";
import { UnitSets } from "./UnitSets";

export namespace EffectBonusValueIdsUnitSets {
  export const KEY = new CollectionKey("effect_bonus_value_ids_unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitSet = values["unit_set"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitSets.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitSets.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitSets.KEY, CampaignBonusValueIdsUnitSets.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
  }
}

export default EffectBonusValueIdsUnitSets;
