
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignUnitPermissionGroups } from "./CampaignUnitPermissionGroups";
import { CampaignUnitPermissions } from "./CampaignUnitPermissions";

export namespace CampaignUnitPermissionGroupToPermissionJunctions {
  export const KEY = new CollectionKey("campaign_unit_permission_group_to_permission_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _permissionGroup: string;
    readonly _permission: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._permissionGroup = values["permission_group"];
      this._permission = values["permission"];
    }
    
    get permissionGroup(): CampaignUnitPermissionGroups.Entry | undefined {
      const collection = <CampaignUnitPermissionGroups.Entry[]>this.collectionCache.getCollection(CampaignUnitPermissionGroups.KEY, CampaignUnitPermissionGroups.Entry);
      return collection.find(entry => entry.key === this._permissionGroup);
    }
    
    get permission(): CampaignUnitPermissions.Entry | undefined {
      const collection = <CampaignUnitPermissions.Entry[]>this.collectionCache.getCollection(CampaignUnitPermissions.KEY, CampaignUnitPermissions.Entry);
      return collection.find(entry => entry.key === this._permission);
    }
  }
}

export default CampaignUnitPermissionGroupToPermissionJunctions;
