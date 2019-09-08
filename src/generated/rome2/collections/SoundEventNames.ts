
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SoundEventNames {
  export const KEY = new CollectionKey("sound_event_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["Name"];
    }
    
  }
}

export default SoundEventNames;
