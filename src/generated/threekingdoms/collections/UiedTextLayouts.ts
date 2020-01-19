
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiedTextLayouts {
  export const KEY = new CollectionKey("uied_text_layouts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly layoutId: string;
    readonly layoutLocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.layoutId = values["layout_id"];
      this.layoutLocation = values["layout_location"];
    }
    
  }
}

export default UiedTextLayouts;
