import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace UiCharacterAttributeGroupsCharacterSkillsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _skill: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): UiCharacterAttributesGroups.Entry | undefined;
        get skill(): CharacterSkills.Entry | undefined;
    }
}
export default UiCharacterAttributeGroupsCharacterSkillsJunctions;
