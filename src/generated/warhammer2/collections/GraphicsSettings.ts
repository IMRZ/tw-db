
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GraphicsSettings {
  export const KEY = new CollectionKey("graphics_settings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;
    readonly displayDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
      this.displayDescription = values["display_description"];
    }
    
  }
}

export default GraphicsSettings;
