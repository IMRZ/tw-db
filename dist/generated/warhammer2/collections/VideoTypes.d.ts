import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace VideoTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly videoType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default VideoTypes;
