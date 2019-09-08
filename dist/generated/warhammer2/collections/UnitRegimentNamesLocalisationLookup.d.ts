import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitRegimentNamesLocalisationLookup {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly unitName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitRegimentNamesLocalisationLookup;
