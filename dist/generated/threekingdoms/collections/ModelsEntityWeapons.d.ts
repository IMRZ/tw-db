import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ModelsEntityWeapons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly modelFile: string;
        readonly logicFile: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ModelsEntityWeapons;
