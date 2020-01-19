
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityCharacterRoleComponents {
  export const KEY = new CollectionKey("cai_personality_character_role_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly existingCharacterScoreMultiplier: number;
    readonly softCharacterCapMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.existingCharacterScoreMultiplier = values["existing_character_score_multiplier"];
      this.softCharacterCapMultiplier = values["soft_character_cap_multiplier"];
    }
    
  }
}

export default CaiPersonalityCharacterRoleComponents;
