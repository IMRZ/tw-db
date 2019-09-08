import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitPopulationCaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: any;
        readonly _faction: any;
        readonly unitCap: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitPopulationCaps;
