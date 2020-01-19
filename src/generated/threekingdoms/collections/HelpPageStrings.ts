
import { CollectionCache, CollectionKey } from "../../../common";


export namespace HelpPageStrings {
  export const KEY = new CollectionKey("help_page_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly text: string;
    readonly useOnLoadingScreen: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.text = values["text"];
      this.useOnLoadingScreen = !!values["use_on_loading_screen"];
    }
    
  }
}

export default HelpPageStrings;
