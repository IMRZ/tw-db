import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiTaggedImages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly imagePath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiTaggedImages;