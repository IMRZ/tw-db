
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyVariableSources {
  export const KEY = new CollectionKey("campaign_diplomacy_variable_sources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyVariableSources;
