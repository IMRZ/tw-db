
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPrestigeTypes } from "./CampaignBonusValueIdsPrestigeTypes";
import { PrestigeTypes } from "./PrestigeTypes";

export namespace EffectBonusValuePrestigeTypeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_prestige_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _prestigeType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._prestigeType = values["prestige_type"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsPrestigeTypes.Entry | undefined {
      const collection = <CampaignBonusValueIdsPrestigeTypes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsPrestigeTypes.KEY, CampaignBonusValueIdsPrestigeTypes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get prestigeType(): PrestigeTypes.Entry | undefined {
      const collection = <PrestigeTypes.Entry[]>this.collectionCache.getCollection(PrestigeTypes.KEY, PrestigeTypes.Entry);
      return collection.find(entry => entry.key === this._prestigeType);
    }
  }
}

export default EffectBonusValuePrestigeTypeJunctions;
