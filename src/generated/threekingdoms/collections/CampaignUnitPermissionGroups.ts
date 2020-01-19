
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignUnitPermissionGroups {
  export const KEY = new CollectionKey("campaign_unit_permission_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignUnitPermissionGroups;
