import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
import { Technologies } from "./Technologies";
export declare namespace CharacterAssignmentConstraintSetRequiredTechnologies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _constraintSet: string;
        readonly _technology: string;
        constructor(collectionCache: CollectionCache, values: any);
        get constraintSet(): CharacterAssignmentConstraintSets.Entry | undefined;
        get technology(): Technologies.Entry | undefined;
    }
}
export default CharacterAssignmentConstraintSetRequiredTechnologies;
