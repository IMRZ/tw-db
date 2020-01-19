
import { CollectionCache, CollectionKey } from "../../../common";
import { TimeOfDayIntervals } from "./TimeOfDayIntervals";
import { Seasons } from "./Seasons";

export namespace TimeOfDayIntervalSeasonJunctions {
  export const KEY = new CollectionKey("time_of_day_interval_season_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _timeOfDay: string;
    readonly _season: string;
    readonly startHour: number;
    readonly startMinute: number;
    readonly startSecond: number;
    readonly speed: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._timeOfDay = values["time_of_day"];
      this._season = values["season"];
      this.startHour = values["start_hour"];
      this.startMinute = values["start_minute"];
      this.startSecond = values["start_second"];
      this.speed = values["speed"];
    }
    
    get timeOfDay(): TimeOfDayIntervals.Entry | undefined {
      const collection = <TimeOfDayIntervals.Entry[]>this.collectionCache.getCollection(TimeOfDayIntervals.KEY, TimeOfDayIntervals.Entry);
      return collection.find(entry => entry.key === this._timeOfDay);
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
  }
}

export default TimeOfDayIntervalSeasonJunctions;
