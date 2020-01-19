
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyHardcodedEffects {
  export const KEY = new CollectionKey("campaign_diplomacy_hardcoded_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignDiplomacyHardcodedEffects;
