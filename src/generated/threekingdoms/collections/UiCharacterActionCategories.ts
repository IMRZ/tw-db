
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiCharacterActionCategories {
  export const KEY = new CollectionKey("ui_character_action_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default UiCharacterActionCategories;
