import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace GraphicsSettings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly displayName: string;
        readonly displayDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default GraphicsSettings;
