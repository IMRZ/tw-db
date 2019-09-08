
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CapturePointTypes {
  export const KEY = new CollectionKey("capture_point_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly iconName: string;
    readonly visibilitySpottingRange: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.iconName = values["icon_name"];
      this.visibilitySpottingRange = values["visibility_spotting_range"];
    }
    
  }
}

export default CapturePointTypes;
