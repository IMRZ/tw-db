
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Achievements {
  export const KEY = new CollectionKey("achievements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly title: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this.description = values["description"];
    }
    
  }
}

export default Achievements;
