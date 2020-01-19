
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace UndercoverCharacterDiscoveredActions {
  export const KEY = new CollectionKey("undercover_character_discovered_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _characterRelationshipTriggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._characterRelationshipTriggers = values["character_relationship_triggers"];
    }
    
    get characterRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._characterRelationshipTriggers);
    }
  }
}

export default UndercoverCharacterDiscoveredActions;
