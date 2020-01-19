
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingSets {
  export const KEY = new CollectionKey("building_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly icon: string;
    readonly sortOrder: number;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;
    readonly onscreenDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.icon = values["icon"];
      this.sortOrder = values["sort_order"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
      this.onscreenDescription = values["onscreen_description"];
    }
    
  }
}

export default BuildingSets;
