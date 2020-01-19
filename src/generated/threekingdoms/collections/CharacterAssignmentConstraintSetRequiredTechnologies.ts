
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
import { Technologies } from "./Technologies";

export namespace CharacterAssignmentConstraintSetRequiredTechnologies {
  export const KEY = new CollectionKey("character_assignment_constraint_set_required_technologies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _constraintSet: string;
    readonly _technology: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._constraintSet = values["constraint_set"];
      this._technology = values["technology"];
    }
    
    get constraintSet(): CharacterAssignmentConstraintSets.Entry | undefined {
      const collection = <CharacterAssignmentConstraintSets.Entry[]>this.collectionCache.getCollection(CharacterAssignmentConstraintSets.KEY, CharacterAssignmentConstraintSets.Entry);
      return collection.find(entry => entry.key === this._constraintSet);
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
  }
}

export default CharacterAssignmentConstraintSetRequiredTechnologies;
