
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AdviceInfoTexts {
  export const KEY = new CollectionKey("advice_info_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedText: string;
    readonly persistant: boolean;
    readonly showOnNavigate: boolean;
    readonly showInstant: boolean;
    readonly isHeader: boolean;
    readonly navigationOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedText = values["localised_text"];
      this.persistant = !!values["persistant"];
      this.showOnNavigate = !!values["show_on_navigate"];
      this.showInstant = !!values["show_instant"];
      this.isHeader = !!values["is_header"];
      this.navigationOrder = values["navigation_order"];
    }
    
  }
}

export default AdviceInfoTexts;
