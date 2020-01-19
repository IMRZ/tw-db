
import { CollectionCache, CollectionKey } from "../../../common";


export namespace HelpPageIndexRecords {
  export const KEY = new CollectionKey("help_page_index_records");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly text: string;
    readonly displayOrder: number;
    readonly insetLevel: number;
    readonly isBattle: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.text = values["text"];
      this.displayOrder = values["display_order"];
      this.insetLevel = values["inset_level"];
      this.isBattle = !!values["is_battle"];
    }
    
  }
}

export default HelpPageIndexRecords;
