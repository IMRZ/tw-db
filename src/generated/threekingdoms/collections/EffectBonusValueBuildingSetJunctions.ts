
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBuildingSets } from "./CampaignBonusValueIdsBuildingSets";
import { BuildingSets } from "./BuildingSets";

export namespace EffectBonusValueBuildingSetJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_building_set_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _buildingSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._buildingSet = values["building_set"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBuildingSets.Entry | undefined {
      const collection = <CampaignBonusValueIdsBuildingSets.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBuildingSets.KEY, CampaignBonusValueIdsBuildingSets.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get buildingSet(): BuildingSets.Entry | undefined {
      const collection = <BuildingSets.Entry[]>this.collectionCache.getCollection(BuildingSets.KEY, BuildingSets.Entry);
      return collection.find(entry => entry.key === this._buildingSet);
    }
  }
}

export default EffectBonusValueBuildingSetJunctions;
