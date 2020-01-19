import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitAttributes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly bulletText: string;
        readonly imuedEffectText: string;
        readonly showInUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitAttributes;
