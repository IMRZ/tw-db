import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace CampaignGroupMemberCriteriaBuildingLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _buildingLevel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get buildingLevel(): BuildingLevels.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaBuildingLevels;
