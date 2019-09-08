
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaTemplateStrings {
  export const KEY = new CollectionKey("encyclopedia_template_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly stringKey: string;
    readonly text: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.stringKey = values["string_key"];
      this.text = values["text"];
    }
    
  }
}

export default EncyclopediaTemplateStrings;
