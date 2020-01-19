import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiUnitGroupParents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly icon: string;
        readonly order: number;
        readonly mpCap: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiUnitGroupParents;
