import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaMultiplayerPages } from "./EncyclopediaMultiplayerPages";
export declare namespace EncyclopediaMultiplayerPageLinkages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pageKey: string;
        readonly _parentKey: string;
        readonly _nextKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pageKey(): EncyclopediaMultiplayerPages.Entry | undefined;
        get parentKey(): EncyclopediaMultiplayerPages.Entry | undefined;
        get nextKey(): EncyclopediaMultiplayerPages.Entry | undefined;
    }
}
export default EncyclopediaMultiplayerPageLinkages;
