
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitDescriptionShortTexts {
  export const KEY = new CollectionKey("unit_description_short_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly text: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.text = values["text"];
    }
    
  }
}

export default UnitDescriptionShortTexts;
