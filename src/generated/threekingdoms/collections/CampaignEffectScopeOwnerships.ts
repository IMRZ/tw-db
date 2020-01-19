
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignEffectScopeOwnerships {
  export const KEY = new CollectionKey("campaign_effect_scope_ownerships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignEffectScopeOwnerships;
