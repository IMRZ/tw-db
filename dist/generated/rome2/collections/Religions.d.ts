import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Religions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly religionKey: string;
        readonly onscreen: string;
        readonly convertibility: number;
        readonly uiIconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Religions;
