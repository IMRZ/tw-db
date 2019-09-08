
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BretonniaVows {
  export const KEY = new CollectionKey("bretonnia_vows");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly localisedDescription: string;
    readonly order: number;
    readonly image: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this.order = values["order"];
      this.image = values["image"];
    }
    
  }
}

export default BretonniaVows;
