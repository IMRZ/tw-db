import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeCategories } from "./WarscapeCategories";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace WarscapeAnimated {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly textureFilenameBase: string;
        readonly _category: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): WarscapeCategories.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default WarscapeAnimated;
