
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Dilemmas {
  export const KEY = new CollectionKey("dilemmas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly uiImage: string;
    readonly uiIcon: string;
    readonly generate: boolean;
    readonly prioritized: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.uiImage = values["ui_image"];
      this.uiIcon = values["ui_icon"];
      this.generate = !!values["generate"];
      this.prioritized = !!values["prioritized"];
    }
    
  }
}

export default Dilemmas;
