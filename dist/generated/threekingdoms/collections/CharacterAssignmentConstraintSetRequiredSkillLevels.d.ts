import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace CharacterAssignmentConstraintSetRequiredSkillLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _constraintSet: string;
        readonly _skill: string;
        readonly minimumLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get constraintSet(): CharacterAssignmentConstraintSets.Entry | undefined;
        get skill(): CharacterSkills.Entry | undefined;
    }
}
export default CharacterAssignmentConstraintSetRequiredSkillLevels;
