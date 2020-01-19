
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiMinisterialPositions {
  export const KEY = new CollectionKey("ui_ministerial_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly backplateImagePath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.backplateImagePath = values["backplate_image_path"];
    }
    
  }
}

export default UiMinisterialPositions;
