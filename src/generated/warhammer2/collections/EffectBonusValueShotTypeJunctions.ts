
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsProjectileShotTypeEnum } from "./CampaignBonusValueIdsProjectileShotTypeEnum";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";

export namespace EffectBonusValueShotTypeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_shot_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _shotType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._shotType = values["shot_type"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsProjectileShotTypeEnum.Entry | undefined {
      const collection = <CampaignBonusValueIdsProjectileShotTypeEnum.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsProjectileShotTypeEnum.KEY, CampaignBonusValueIdsProjectileShotTypeEnum.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get shotType(): ProjectileShotTypeEnum.Entry | undefined {
      const collection = <ProjectileShotTypeEnum.Entry[]>this.collectionCache.getCollection(ProjectileShotTypeEnum.KEY, ProjectileShotTypeEnum.Entry);
      return collection.find(entry => entry.key === this._shotType);
    }
  }
}

export default EffectBonusValueShotTypeJunctions;
