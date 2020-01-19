
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioRtpcAssignments {
  export const KEY = new CollectionKey("audio_rtpc_assignments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
    }
    
  }
}

export default AudioRtpcAssignments;
