import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TimeOfDayIntervals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly startHour: number;
        readonly startMinute: number;
        readonly startSecond: number;
        readonly nightBattle: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TimeOfDayIntervals;
