
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitClass {
  export const KEY = new CollectionKey("unit_class");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;
    readonly tooltip: string;
    readonly sortPriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
      this.tooltip = values["tooltip"];
      this.sortPriority = values["sort_priority"];
    }
    
  }
}

export default UnitClass;
