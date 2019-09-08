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
        readonly pageKey: EncyclopediaGlossaryPages.Entry | undefined;
        readonly parentKey: EncyclopediaGlossaryPages.Entry | undefined;
        readonly nextKey: EncyclopediaGlossaryPages.Entry | undefined;
    }
}
export default EncyclopediaGlossaryPageLinkages;
