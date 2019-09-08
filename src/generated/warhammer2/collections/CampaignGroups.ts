
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignGroups {
  export const KEY = new CollectionKey("campaign_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignGroups;
