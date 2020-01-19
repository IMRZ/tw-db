import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { CharacterAssignments } from "./CharacterAssignments";
export declare namespace CaiPersonalityCharacterAssignmentPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly _assignmentId: string;
        readonly priority: number;
        readonly minTurns: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityCharacterRoleComponents.Entry | undefined;
        get assignmentId(): CharacterAssignments.Entry | undefined;
    }
}
export default CaiPersonalityCharacterAssignmentPriorities;
