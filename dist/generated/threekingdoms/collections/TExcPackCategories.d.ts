import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TExcPackCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly packCategory: string;
        readonly scriptName: string;
        readonly packFile: string;
        readonly localisationFile: string;
        readonly locked: boolean;
        readonly lockedBy: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TExcPackCategories;
