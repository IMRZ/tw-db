import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeCategories } from "./WarscapeCategories";
export declare namespace WarscapeRigid {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly textureDirectory: string;
        readonly _category: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: WarscapeCategories.Entry | undefined;
    }
}
export default WarscapeRigid;
