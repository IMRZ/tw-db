
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TechnologyUiGroups {
  export const KEY = new CollectionKey("technology_ui_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly colourRed: number;
    readonly colourGreen: number;
    readonly colourBlue: number;
    readonly optionalDisplayName: string;
    readonly optionalDisplayDesctiption: string;
    readonly optionalBackgroundImage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.colourRed = values["colour_red"];
      this.colourGreen = values["colour_green"];
      this.colourBlue = values["colour_blue"];
      this.optionalDisplayName = values["optional_display_name"];
      this.optionalDisplayDesctiption = values["optional_display_desctiption"];
      this.optionalBackgroundImage = values["optional_background_image"];
    }
    
  }
}

export default TechnologyUiGroups;
