import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ModelsBuilding {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly modelFile: string;
        readonly logicFile: string;
        readonly displayPath: string;
        readonly cs2File: string;
        readonly techFile: string;
        readonly collisionFile: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ModelsBuilding;
