
import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";

export namespace Events {
  export const KEY = new CollectionKey("events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly pictureCategory: string;
    readonly dynamic: boolean;
    readonly onscreenName: string;
    readonly eventText: string;
    readonly historicalDate: number;
    readonly _season: string;
    readonly conditions: string;
    readonly picture: string;
    readonly turnInYear: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.pictureCategory = values["picture_category"];
      this.dynamic = !!values["dynamic"];
      this.onscreenName = values["onscreen_name"];
      this.eventText = values["event_text"];
      this.historicalDate = values["historical_date"];
      this._season = values["season"];
      this.conditions = values["conditions"];
      this.picture = values["picture"];
      this.turnInYear = values["turn_in_year"];
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
  }
}

export default Events;
