import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { CaiCharacterRoles } from "./CaiCharacterRoles";
export declare namespace CaiPersonalityCharacterRoleValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly _roleId: string;
        readonly importantCharacterValue: number;
        readonly levelMin: number;
        readonly levelMax: number;
        readonly levelValueMin: number;
        readonly levelValueMax: number;
        readonly loyaltyMin: number;
        readonly loyaltyMax: number;
        readonly loyaltyValueMin: number;
        readonly loyaltyValueMax: number;
        readonly ageMin: number;
        readonly ageMax: number;
        readonly ageValueMin: number;
        readonly ageValueMax: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityCharacterRoleComponents.Entry | undefined;
        get roleId(): CaiCharacterRoles.Entry | undefined;
    }
}
export default CaiPersonalityCharacterRoleValues;
