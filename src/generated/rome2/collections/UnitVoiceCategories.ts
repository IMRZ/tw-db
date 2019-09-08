
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitVoiceCategories {
  export const KEY = new CollectionKey("unit_voice_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitVoiceCategories;
