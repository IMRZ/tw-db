
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaHistoricalInfoPages {
  export const KEY = new CollectionKey("encyclopedia_historical_info_pages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly pageKey: string;
    readonly title: string;
    readonly template: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.pageKey = values["page_key"];
      this.title = values["title"];
      this.template = values["template"];
    }
    
  }
}

export default EncyclopediaHistoricalInfoPages;
