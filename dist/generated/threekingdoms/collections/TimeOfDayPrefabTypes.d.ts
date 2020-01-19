import { CollectionCache, CollectionKey } from "../../../common";
import { TimeOfDayIntervals } from "./TimeOfDayIntervals";
import { PrefabTypes } from "./PrefabTypes";
export declare namespace TimeOfDayPrefabTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _timeOfDay: string;
        readonly _prefabType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get timeOfDay(): TimeOfDayIntervals.Entry | undefined;
        get prefabType(): PrefabTypes.Entry | undefined;
    }
}
export default TimeOfDayPrefabTypes;
