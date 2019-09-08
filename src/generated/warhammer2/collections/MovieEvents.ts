
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MovieEvents {
  export const KEY = new CollectionKey("movie_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly event: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.event = values["event"];
    }
    
  }
}

export default MovieEvents;
