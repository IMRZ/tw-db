
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiUnitBulletPointEnums {
  export const KEY = new CollectionKey("ui_unit_bullet_point_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly state: string;
    readonly sortOrder: number;
    readonly tooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.state = values["state"];
      this.sortOrder = values["sort_order"];
      this.tooltip = values["tooltip"];
    }
    
  }
}

export default UiUnitBulletPointEnums;
