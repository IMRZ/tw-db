
import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";

export namespace LoadingScreenSeasonImages {
  export const KEY = new CollectionKey("loading_screen_season_images");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _season: string;
    readonly imagePath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._season = values["season"];
      this.imagePath = values["image_path"];
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
  }
}

export default LoadingScreenSeasonImages;
