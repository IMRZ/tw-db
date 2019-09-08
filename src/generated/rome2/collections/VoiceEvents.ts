
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VoiceEvents {
  export const KEY = new CollectionKey("voice_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
    }
    
  }
}

export default VoiceEvents;
