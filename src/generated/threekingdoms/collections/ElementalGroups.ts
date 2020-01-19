
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ElementalGroups {
  export const KEY = new CollectionKey("elemental_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly onscreenDescription: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.onscreenDescription = values["onscreen_description"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default ElementalGroups;
