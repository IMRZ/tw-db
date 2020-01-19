import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";
export declare namespace EncyclopediaIndexPages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly pageKey: string;
        readonly _annotation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get annotation(): EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaIndexPages;
