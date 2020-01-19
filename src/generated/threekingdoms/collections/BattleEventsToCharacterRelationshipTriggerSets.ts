
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace BattleEventsToCharacterRelationshipTriggerSets {
  export const KEY = new CollectionKey("battle_events_to_character_relationship_trigger_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly battleEvent: string;
    readonly _characterRelationshipTriggerSets: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.battleEvent = values["battle_event"];
      this._characterRelationshipTriggerSets = values["character_relationship_trigger_sets"];
    }
    
    get characterRelationshipTriggerSets(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._characterRelationshipTriggerSets);
    }
  }
}

export default BattleEventsToCharacterRelationshipTriggerSets;
