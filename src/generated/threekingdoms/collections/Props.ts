
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Props {
  export const KEY = new CollectionKey("props");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly metaTagGroups: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.metaTagGroups = values["meta_tag_groups"];
    }
    
  }
}

export default Props;
