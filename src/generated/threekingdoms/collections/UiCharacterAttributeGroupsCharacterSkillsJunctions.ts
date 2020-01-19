
import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { CharacterSkills } from "./CharacterSkills";

export namespace UiCharacterAttributeGroupsCharacterSkillsJunctions {
  export const KEY = new CollectionKey("ui_character_attribute_groups_character_skills_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _skill: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._skill = values["skill"];
    }
    
    get group(): UiCharacterAttributesGroups.Entry | undefined {
      const collection = <UiCharacterAttributesGroups.Entry[]>this.collectionCache.getCollection(UiCharacterAttributesGroups.KEY, UiCharacterAttributesGroups.Entry);
      return collection.find(entry => entry.groupId === this._group);
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
  }
}

export default UiCharacterAttributeGroupsCharacterSkillsJunctions;
