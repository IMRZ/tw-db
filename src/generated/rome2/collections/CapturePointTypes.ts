
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CapturePointTypes {
  export const KEY = new CollectionKey("capture_point_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly iconName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.iconName = values["icon_name"];
    }
    
  }
}

export default CapturePointTypes;
