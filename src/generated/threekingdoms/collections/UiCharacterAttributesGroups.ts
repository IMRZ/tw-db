
import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";

export namespace UiCharacterAttributesGroups {
  export const KEY = new CollectionKey("ui_character_attributes_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupId: string;
    readonly _colour: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupId = values["group_id"];
      this._colour = values["colour"];
      this.iconPath = values["icon_path"];
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
  }
}

export default UiCharacterAttributesGroups;
