
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AncillaryTypes {
  export const KEY = new CollectionKey("ancillary_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly uiIcon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.uiIcon = values["ui_icon"];
    }
    
  }
}

export default AncillaryTypes;
