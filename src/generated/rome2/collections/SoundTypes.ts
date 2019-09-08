
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SoundTypes {
  export const KEY = new CollectionKey("sound_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default SoundTypes;
