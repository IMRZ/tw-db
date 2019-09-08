
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAutoresolverStatVariables {
  export const KEY = new CollectionKey("campaign_autoresolver_stat_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignAutoresolverStatVariables;
