import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CompositeSceneFiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly sceneFilepath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CompositeSceneFiles;
