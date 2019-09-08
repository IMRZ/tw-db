
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStringVariables {
  export const KEY = new CollectionKey("campaign_string_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
    }
    
  }
}

export default CampaignStringVariables;
