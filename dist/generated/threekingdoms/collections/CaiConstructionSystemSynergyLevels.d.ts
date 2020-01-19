import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiConstructionSystemSynergyLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly relativeEffect: number;
        readonly absoluteEffect: number;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiConstructionSystemSynergyLevels;
