
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SotekTooltipTypes {
  export const KEY = new CollectionKey("sotek_tooltip_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default SotekTooltipTypes;
