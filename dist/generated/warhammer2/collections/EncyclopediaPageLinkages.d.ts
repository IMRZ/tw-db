import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaPages } from "./EncyclopediaPages";
export declare namespace EncyclopediaPageLinkages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pageKey: string;
        readonly _parentKey: string;
        readonly _nextKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly pageKey: EncyclopediaPages.Entry | undefined;
        readonly parentKey: EncyclopediaPages.Entry | undefined;
        readonly nextKey: EncyclopediaPages.Entry | undefined;
    }
}
export default EncyclopediaPageLinkages;
