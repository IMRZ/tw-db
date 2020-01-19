import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleDuelScopes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly scope: string;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleDuelScopes;
