import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { MinisterialPositions } from "./MinisterialPositions";
import { CaiCharacterRoles } from "./CaiCharacterRoles";
export declare namespace CaiPersonalityCharacterRolePriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly _ministerialPositionId: string;
        readonly priority: number;
        readonly reassignmentAllowed: boolean;
        readonly assignedCharacterBias: number;
        readonly _roleType: string;
        readonly familyBias: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityCharacterRoleComponents.Entry | undefined;
        get ministerialPositionId(): MinisterialPositions.Entry | undefined;
        get roleType(): CaiCharacterRoles.Entry | undefined;
    }
}
export default CaiPersonalityCharacterRolePriorities;
