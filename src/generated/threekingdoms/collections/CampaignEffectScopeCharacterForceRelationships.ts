
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignEffectScopeCharacterForceRelationships {
  export const KEY = new CollectionKey("campaign_effect_scope_character_force_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignEffectScopeCharacterForceRelationships;
