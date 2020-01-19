
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignUnitPermissions {
  export const KEY = new CollectionKey("campaign_unit_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignUnitPermissions;
