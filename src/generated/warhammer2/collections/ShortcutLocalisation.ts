
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ShortcutLocalisation {
  export const KEY = new CollectionKey("shortcut_localisation");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;
    readonly toolitp: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
      this.toolitp = values["toolitp"];
    }
    
  }
}

export default ShortcutLocalisation;
