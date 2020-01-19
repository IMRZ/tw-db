
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TimeOfDayIntervals {
  export const KEY = new CollectionKey("time_of_day_intervals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly startHour: number;
    readonly startMinute: number;
    readonly startSecond: number;
    readonly nightBattle: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.startHour = values["start_hour"];
      this.startMinute = values["start_minute"];
      this.startSecond = values["start_second"];
      this.nightBattle = !!values["night_battle"];
    }
    
  }
}

export default TimeOfDayIntervals;
