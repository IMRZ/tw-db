import { CollectionCache, CollectionKey } from "../../../common";
import { TimeOfDayIntervals } from "./TimeOfDayIntervals";
import { Seasons } from "./Seasons";
export declare namespace TimeOfDayIntervalSeasonJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _timeOfDay: string;
        readonly _season: string;
        readonly startHour: number;
        readonly startMinute: number;
        readonly startSecond: number;
        readonly speed: number;
        constructor(collectionCache: CollectionCache, values: any);
        get timeOfDay(): TimeOfDayIntervals.Entry | undefined;
        get season(): Seasons.Entry | undefined;
    }
}
export default TimeOfDayIntervalSeasonJunctions;
