import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ShortcutLocalisation {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        readonly toolitp: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ShortcutLocalisation;
