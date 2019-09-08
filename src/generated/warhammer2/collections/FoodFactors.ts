
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FoodFactors {
  export const KEY = new CollectionKey("food_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly textToDisplay: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.textToDisplay = values["text_to_display"];
    }
    
  }
}

export default FoodFactors;
