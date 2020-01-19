
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";

export namespace CampaignBuildingChainSlotUnlocks {
  export const KEY = new CollectionKey("campaign_building_chain_slot_unlocks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingChain: string;
    readonly secondaryBuildingSlotUnlockPointsPerLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingChain = values["building_chain"];
      this.secondaryBuildingSlotUnlockPointsPerLevel = values["secondary_building_slot_unlock_points_per_level"];
    }
    
    get buildingChain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._buildingChain);
    }
  }
}

export default CampaignBuildingChainSlotUnlocks;
