
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";

export namespace CampaignBuildingChainSlotUnlocks {
  export const KEY = new CollectionKey("campaign_building_chain_slot_unlocks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingChain: string;
    readonly activeSlotCount: number;
    readonly level: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingChain = values["building_chain"];
      this.activeSlotCount = values["active_slot_count"];
      this.level = values["level"];
    }
    
    get buildingChain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._buildingChain);
    }
  }
}

export default CampaignBuildingChainSlotUnlocks;
