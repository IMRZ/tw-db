import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace WarscapeRigidLodRange {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly lodId: string;
        readonly range: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default WarscapeRigidLodRange;
