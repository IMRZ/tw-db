
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Incidents {
  export const KEY = new CollectionKey("incidents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly uiImage: string;
    readonly uiIcon: string;
    readonly generate: boolean;
    readonly prioritised: boolean;
    readonly localisedTitle: string;
    readonly localisedDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.uiImage = values["ui_image"];
      this.uiIcon = values["ui_icon"];
      this.generate = !!values["generate"];
      this.prioritised = !!values["prioritised"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
    }
    
  }
}

export default Incidents;
