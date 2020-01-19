
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignEffectScopeCharacterUnitRelationships {
  export const KEY = new CollectionKey("campaign_effect_scope_character_unit_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignEffectScopeCharacterUnitRelationships;
