import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiConstructionSystemTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly defaultCategoryAndGroupValue: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiConstructionSystemTemplates;
