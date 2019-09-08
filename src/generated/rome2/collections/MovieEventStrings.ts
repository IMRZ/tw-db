
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MovieEventStrings {
  export const KEY = new CollectionKey("movie_event_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly event: string;
    readonly _culture: any;
    readonly title: string;
    readonly movie: string;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.event = values["event"];
      this._culture = values["culture"];
      this.title = values["title"];
      this.movie = values["movie"];
      this.id = values["id"];
    }
    
  }
}

export default MovieEventStrings;
