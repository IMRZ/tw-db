import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { BuildingSlotGroups } from "./BuildingSlotGroups";
export declare namespace CampaignGroupMemberCriteriaBuildingSlotGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _buildingSlotGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get buildingSlotGroup(): BuildingSlotGroups.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaBuildingSlotGroups;
