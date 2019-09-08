import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCinematicEventCategories } from "./BattleCinematicEventCategories";
export declare namespace BattleCinematicEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly filename: string;
        readonly priority: number;
        readonly level: string;
        readonly windowIn: number;
        readonly windowOut: number;
        readonly repeatWaitMs: number;
        readonly _eventCategory: string;
        readonly timeAfterEvent: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly eventCategory: BattleCinematicEventCategories.Entry | undefined;
    }
}
export default BattleCinematicEvents;
