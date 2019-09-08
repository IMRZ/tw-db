import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ModelsDeployables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly modelFile: string;
        readonly logicFile: string;
        readonly displayPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ModelsDeployables;
