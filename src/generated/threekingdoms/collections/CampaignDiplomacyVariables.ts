
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyVariables {
  export const KEY = new CollectionKey("campaign_diplomacy_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyVariables;
