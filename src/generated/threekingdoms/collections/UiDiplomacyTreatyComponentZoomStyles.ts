
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyTreatyComponentZoomStyles {
  export const KEY = new CollectionKey("ui_diplomacy_treaty_component_zoom_styles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UiDiplomacyTreatyComponentZoomStyles;
