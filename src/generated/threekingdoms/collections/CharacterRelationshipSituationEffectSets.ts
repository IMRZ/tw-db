
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipSituationEffectSets {
  export const KEY = new CollectionKey("character_relationship_situation_effect_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly loyaltyValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.loyaltyValue = values["loyalty_value"];
    }
    
  }
}

export default CharacterRelationshipSituationEffectSets;
