
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiUnitGroupParents {
  export const KEY = new CollectionKey("ui_unit_group_parents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly icon: string;
    readonly order: number;
    readonly mpCap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.icon = values["icon"];
      this.order = values["order"];
      this.mpCap = values["mp_cap"];
    }
    
  }
}

export default UiUnitGroupParents;
