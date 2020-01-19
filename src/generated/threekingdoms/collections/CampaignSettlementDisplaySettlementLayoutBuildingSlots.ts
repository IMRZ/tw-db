
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplaySettlementLayoutIds } from "./CampaignSettlementDisplaySettlementLayoutIds";
import { BuildingSlotGroups } from "./BuildingSlotGroups";

export namespace CampaignSettlementDisplaySettlementLayoutBuildingSlots {
  export const KEY = new CollectionKey("campaign_settlement_display_settlement_layout_building_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _layout: string;
    readonly _buildingSlotGroup: string;
    readonly slotCount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._layout = values["layout"];
      this._buildingSlotGroup = values["building_slot_group"];
      this.slotCount = values["slot_count"];
    }
    
    get layout(): CampaignSettlementDisplaySettlementLayoutIds.Entry | undefined {
      const collection = <CampaignSettlementDisplaySettlementLayoutIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplaySettlementLayoutIds.KEY, CampaignSettlementDisplaySettlementLayoutIds.Entry);
      return collection.find(entry => entry.layout === this._layout);
    }
    
    get buildingSlotGroup(): BuildingSlotGroups.Entry | undefined {
      const collection = <BuildingSlotGroups.Entry[]>this.collectionCache.getCollection(BuildingSlotGroups.KEY, BuildingSlotGroups.Entry);
      return collection.find(entry => entry.key === this._buildingSlotGroup);
    }
  }
}

export default CampaignSettlementDisplaySettlementLayoutBuildingSlots;
