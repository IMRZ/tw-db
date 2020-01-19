import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TimeOfDayModes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly isDynamic: boolean;
        readonly isRealtimeSpeed: boolean;
        readonly hour: number;
        readonly name: string;
        readonly description: string;
        readonly speedMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TimeOfDayModes;
