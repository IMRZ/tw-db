
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipTriggerTargetTypes {
  export const KEY = new CollectionKey("character_relationship_trigger_target_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterRelationshipTriggerTargetTypes;
