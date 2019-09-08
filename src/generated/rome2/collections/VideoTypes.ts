
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VideoTypes {
  export const KEY = new CollectionKey("video_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly videoType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.videoType = values["video_type"];
    }
    
  }
}

export default VideoTypes;
