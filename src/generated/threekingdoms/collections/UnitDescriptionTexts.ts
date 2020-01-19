
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitDescriptionTexts {
  export const KEY = new CollectionKey("unit_description_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly descriptionText: string;
    readonly longDescriptionText: string;
    readonly strengthsAndWeaknesses: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.descriptionText = values["description_text"];
      this.longDescriptionText = values["long_description_text"];
      this.strengthsAndWeaknesses = values["strengths_and_weaknesses"];
    }
    
  }
}

export default UnitDescriptionTexts;
