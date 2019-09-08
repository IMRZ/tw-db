
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VoCharacters {
  export const KEY = new CollectionKey("vo_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
    }
    
  }
}

export default VoCharacters;
