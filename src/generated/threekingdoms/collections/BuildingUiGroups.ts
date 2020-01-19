
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingUiGroups {
  export const KEY = new CollectionKey("building_ui_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly iconPath: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.iconPath = values["icon_path"];
      this.order = values["order"];
    }
    
  }
}

export default BuildingUiGroups;
