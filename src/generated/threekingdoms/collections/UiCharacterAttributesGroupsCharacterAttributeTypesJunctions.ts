
import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";

export namespace UiCharacterAttributesGroupsCharacterAttributeTypesJunctions {
  export const KEY = new CollectionKey("ui_character_attributes_groups_character_attribute_types_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _attributeType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._attributeType = values["attribute_type"];
    }
    
    get group(): UiCharacterAttributesGroups.Entry | undefined {
      const collection = <UiCharacterAttributesGroups.Entry[]>this.collectionCache.getCollection(UiCharacterAttributesGroups.KEY, UiCharacterAttributesGroups.Entry);
      return collection.find(entry => entry.groupId === this._group);
    }
    
    get attributeType(): CharacterAttributeTypes.Entry | undefined {
      const collection = <CharacterAttributeTypes.Entry[]>this.collectionCache.getCollection(CharacterAttributeTypes.KEY, CharacterAttributeTypes.Entry);
      return collection.find(entry => entry.type === this._attributeType);
    }
  }
}

export default UiCharacterAttributesGroupsCharacterAttributeTypesJunctions;
