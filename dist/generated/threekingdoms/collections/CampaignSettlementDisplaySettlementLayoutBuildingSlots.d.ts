import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplaySettlementLayoutIds } from "./CampaignSettlementDisplaySettlementLayoutIds";
import { BuildingSlotGroups } from "./BuildingSlotGroups";
export declare namespace CampaignSettlementDisplaySettlementLayoutBuildingSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _layout: string;
        readonly _buildingSlotGroup: string;
        readonly slotCount: number;
        constructor(collectionCache: CollectionCache, values: any);
        get layout(): CampaignSettlementDisplaySettlementLayoutIds.Entry | undefined;
        get buildingSlotGroup(): BuildingSlotGroups.Entry | undefined;
    }
}
export default CampaignSettlementDisplaySettlementLayoutBuildingSlots;
