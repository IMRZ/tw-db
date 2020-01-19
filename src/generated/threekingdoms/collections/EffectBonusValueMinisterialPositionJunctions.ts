
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsMinisterialPositions } from "./CampaignBonusValueIdsMinisterialPositions";
import { MinisterialPositions } from "./MinisterialPositions";

export namespace EffectBonusValueMinisterialPositionJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_ministerial_position_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _ministerialPosition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._ministerialPosition = values["ministerial_position"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsMinisterialPositions.Entry | undefined {
      const collection = <CampaignBonusValueIdsMinisterialPositions.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsMinisterialPositions.KEY, CampaignBonusValueIdsMinisterialPositions.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
  }
}

export default EffectBonusValueMinisterialPositionJunctions;
