import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeCategories } from "./WarscapeCategories";
export declare namespace WarscapeAnimated {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly textureFilenameBase: string;
        readonly _category: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): WarscapeCategories.Entry | undefined;
    }
}
export default WarscapeAnimated;
