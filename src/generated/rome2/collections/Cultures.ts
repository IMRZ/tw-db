
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Cultures {
  export const KEY = new CollectionKey("cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly index: number;
    readonly fallbackUiCulture: string;
    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.index = values["index"];
      this.fallbackUiCulture = values["fallback_ui_culture"];
      this.name = values["name"];
    }
    
  }
}

export default Cultures;
