
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaGlossaryPages {
  export const KEY = new CollectionKey("encyclopedia_glossary_pages");

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

export default EncyclopediaGlossaryPages;
