import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";
import { Ceos } from "./Ceos";
export declare namespace CharacterAssignmentConstraintSetRequiredCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _constraintSet: string;
        readonly _ceo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get constraintSet(): CharacterAssignmentConstraintSets.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CharacterAssignmentConstraintSetRequiredCeos;
