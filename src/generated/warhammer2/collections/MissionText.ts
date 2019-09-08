
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MissionText {
  export const KEY = new CollectionKey("mission_text");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly text: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.text = values["text"];
    }
    
  }
}

export default MissionText;
