
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingDescriptionTexts {
  export const KEY = new CollectionKey("building_description_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly longDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.longDescription = values["long_description"];
    }
    
  }
}

export default BuildingDescriptionTexts;
