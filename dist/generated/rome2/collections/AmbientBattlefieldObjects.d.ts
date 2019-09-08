import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AmbientBattlefieldObjects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ambientBattlefieldObject: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AmbientBattlefieldObjects;
