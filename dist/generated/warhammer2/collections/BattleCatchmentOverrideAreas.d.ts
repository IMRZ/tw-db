import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleCatchmentOverrideAreas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly area: string;
        readonly red: number;
        readonly green: number;
        readonly blue: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleCatchmentOverrideAreas;
