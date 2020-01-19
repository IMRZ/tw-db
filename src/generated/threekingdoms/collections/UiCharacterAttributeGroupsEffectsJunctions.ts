
import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { Effects } from "./Effects";

export namespace UiCharacterAttributeGroupsEffectsJunctions {
  export const KEY = new CollectionKey("ui_character_attribute_groups_effects_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _effect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._effect = values["effect"];
    }
    
    get group(): UiCharacterAttributesGroups.Entry | undefined {
      const collection = <UiCharacterAttributesGroups.Entry[]>this.collectionCache.getCollection(UiCharacterAttributesGroups.KEY, UiCharacterAttributesGroups.Entry);
      return collection.find(entry => entry.groupId === this._group);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
  }
}

export default UiCharacterAttributeGroupsEffectsJunctions;
