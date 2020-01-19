
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipMemories {
  export const KEY = new CollectionKey("character_relationship_memories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;
    readonly localisedDescriptionTargetCharacter: string;
    readonly directional: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
      this.localisedDescriptionTargetCharacter = values["localised_description_target_character"];
      this.directional = !!values["directional"];
    }
    
  }
}

export default CharacterRelationshipMemories;
