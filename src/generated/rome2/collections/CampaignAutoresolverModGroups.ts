
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAutoresolverModGroups {
  export const KEY = new CollectionKey("campaign_autoresolver_mod_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignAutoresolverModGroups;
