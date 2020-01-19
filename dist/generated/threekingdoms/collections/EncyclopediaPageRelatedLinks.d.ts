import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaPages } from "./EncyclopediaPages";
export declare namespace EncyclopediaPageRelatedLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pageKey: string;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pageKey(): EncyclopediaPages.Entry | undefined;
        get target(): EncyclopediaPages.Entry | undefined;
    }
}
export default EncyclopediaPageRelatedLinks;
