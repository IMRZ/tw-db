import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitAttributes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly bulletText: string;
        readonly imuedEffectText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitAttributes;
