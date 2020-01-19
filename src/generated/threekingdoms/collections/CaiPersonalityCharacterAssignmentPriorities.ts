
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { CharacterAssignments } from "./CharacterAssignments";

export namespace CaiPersonalityCharacterAssignmentPriorities {
  export const KEY = new CollectionKey("cai_personality_character_assignment_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly _assignmentId: string;
    readonly priority: number;
    readonly minTurns: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this._assignmentId = values["assignment_id"];
      this.priority = values["priority"];
      this.minTurns = values["min_turns"];
    }
    
    get componentId(): CaiPersonalityCharacterRoleComponents.Entry | undefined {
      const collection = <CaiPersonalityCharacterRoleComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCharacterRoleComponents.KEY, CaiPersonalityCharacterRoleComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get assignmentId(): CharacterAssignments.Entry | undefined {
      const collection = <CharacterAssignments.Entry[]>this.collectionCache.getCollection(CharacterAssignments.KEY, CharacterAssignments.Entry);
      return collection.find(entry => entry.key === this._assignmentId);
    }
  }
}

export default CaiPersonalityCharacterAssignmentPriorities;
