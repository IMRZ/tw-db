import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";
export declare namespace UiCharacterAttributesGroupsCharacterAttributeTypesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _attributeType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): UiCharacterAttributesGroups.Entry | undefined;
        get attributeType(): CharacterAttributeTypes.Entry | undefined;
    }
}
export default UiCharacterAttributesGroupsCharacterAttributeTypesJunctions;
