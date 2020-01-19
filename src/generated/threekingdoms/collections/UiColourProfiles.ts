
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiColourProfiles {
  export const KEY = new CollectionKey("ui_colour_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly localisedDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
    }
    
  }
}

export default UiColourProfiles;
