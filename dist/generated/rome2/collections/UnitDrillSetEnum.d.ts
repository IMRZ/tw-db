import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitDrillSetEnum {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly unitDrillSet: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitDrillSetEnum;
