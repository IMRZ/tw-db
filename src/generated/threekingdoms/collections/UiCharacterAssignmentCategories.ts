
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiCharacterAssignmentCategories {
  export const KEY = new CollectionKey("ui_character_assignment_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default UiCharacterAssignmentCategories;
