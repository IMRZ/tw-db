
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GraphicsSettingsOptions {
  export const KEY = new CollectionKey("graphics_settings_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayText = values["display_text"];
    }
    
  }
}

export default GraphicsSettingsOptions;
