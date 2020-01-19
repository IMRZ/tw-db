
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
import { CharacterSkills } from "./CharacterSkills";

export namespace CharacterAssignmentConstraintSetRequiredSkillLevels {
  export const KEY = new CollectionKey("character_assignment_constraint_set_required_skill_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _constraintSet: string;
    readonly _skill: string;
    readonly minimumLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._constraintSet = values["constraint_set"];
      this._skill = values["skill"];
      this.minimumLevel = values["minimum_level"];
    }
    
    get constraintSet(): CharacterAssignmentConstraintSets.Entry | undefined {
      const collection = <CharacterAssignmentConstraintSets.Entry[]>this.collectionCache.getCollection(CharacterAssignmentConstraintSets.KEY, CharacterAssignmentConstraintSets.Entry);
      return collection.find(entry => entry.key === this._constraintSet);
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
  }
}

export default CharacterAssignmentConstraintSetRequiredSkillLevels;
