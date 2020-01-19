
import { CollectionCache, CollectionKey } from "../../../common";
import { MovieEvents } from "./MovieEvents";

export namespace MovieEventStrings {
  export const KEY = new CollectionKey("movie_event_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly _culture: any;
    readonly title: string;
    readonly movie: string;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this._culture = values["culture"];
      this.title = values["title"];
      this.movie = values["movie"];
      this.id = values["id"];
    }
    
    get event(): MovieEvents.Entry | undefined {
      const collection = <MovieEvents.Entry[]>this.collectionCache.getCollection(MovieEvents.KEY, MovieEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
  }
}

export default MovieEventStrings;
