
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingShortDescriptionTexts {
  export const KEY = new CollectionKey("building_short_description_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly shortDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.shortDescription = values["short_description"];
    }
    
  }
}

export default BuildingShortDescriptionTexts;
