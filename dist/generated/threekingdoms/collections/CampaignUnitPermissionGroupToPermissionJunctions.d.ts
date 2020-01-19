import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignUnitPermissionGroups } from "./CampaignUnitPermissionGroups";
import { CampaignUnitPermissions } from "./CampaignUnitPermissions";
export declare namespace CampaignUnitPermissionGroupToPermissionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _permissionGroup: string;
        readonly _permission: string;
        constructor(collectionCache: CollectionCache, values: any);
        get permissionGroup(): CampaignUnitPermissionGroups.Entry | undefined;
        get permission(): CampaignUnitPermissions.Entry | undefined;
    }
}
export default CampaignUnitPermissionGroupToPermissionJunctions;
