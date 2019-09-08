import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
export declare namespace HistoricalBattlesUiLocations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly x: number;
        readonly y: number;
        readonly heightPercent: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: Battles.Entry | undefined;
    }
}
export default HistoricalBattlesUiLocations;
