
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBuildingChain } from "./CampaignBonusValueIdsBuildingChain";
import { BuildingChains } from "./BuildingChains";

export namespace EffectBonusValueBuildingChainJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_building_chain_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _buildingChain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._buildingChain = values["building_chain"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBuildingChain.Entry | undefined {
      const collection = <CampaignBonusValueIdsBuildingChain.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBuildingChain.KEY, CampaignBonusValueIdsBuildingChain.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get buildingChain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._buildingChain);
    }
  }
}

export default EffectBonusValueBuildingChainJunctions;
