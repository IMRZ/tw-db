
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MortuaryCultCategories {
  export const KEY = new CollectionKey("mortuary_cult_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly localisedDescription: string;
    readonly showOrder: number;
    readonly craftButtonText: string;
    readonly localisedButtonDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this.showOrder = values["show_order"];
      this.craftButtonText = values["craft_button_text"];
      this.localisedButtonDescription = values["localised_button_description"];
    }
    
  }
}

export default MortuaryCultCategories;
