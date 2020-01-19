import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaGlossaryPages } from "./EncyclopediaGlossaryPages";
export declare namespace EncyclopediaGlossaryPageLinkages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pageKey: string;
        readonly _parentKey: string;
        readonly _nextKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pageKey(): EncyclopediaGlossaryPages.Entry | undefined;
        get parentKey(): EncyclopediaGlossaryPages.Entry | undefined;
        get nextKey(): EncyclopediaGlossaryPages.Entry | undefined;
    }
}
export default EncyclopediaGlossaryPageLinkages;
