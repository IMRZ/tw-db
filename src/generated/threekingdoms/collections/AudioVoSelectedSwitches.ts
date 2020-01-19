
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioVoSelectedSwitches {
  export const KEY = new CollectionKey("audio_vo_selected_switches");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioVoSelectedSwitches;
