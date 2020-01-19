
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiUnitStatuses {
  export const KEY = new CollectionKey("ui_unit_statuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly tooltip: string;
    readonly iconPath: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.tooltip = values["tooltip"];
      this.iconPath = values["icon_path"];
      this.priority = values["priority"];
    }
    
  }
}

export default UiUnitStatuses;
