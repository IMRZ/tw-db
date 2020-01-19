
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyDealSignedAnimations {
  export const KEY = new CollectionKey("ui_diplomacy_deal_signed_animations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly layoutPath: string;
    readonly localisedText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.layoutPath = values["layout_path"];
      this.localisedText = values["localised_text"];
    }
    
  }
}

export default UiDiplomacyDealSignedAnimations;
