import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaGlossaryPages } from "./EncyclopediaGlossaryPages";
export declare namespace EncyclopediaGlossaryBlocks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly blockKey: string;
        readonly _pageKey: string;
        readonly order: number;
        readonly heading: string;
        readonly class: string;
        readonly content: string;
        readonly image: string;
        readonly imageClass: string;
        readonly video: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pageKey(): EncyclopediaGlossaryPages.Entry | undefined;
    }
}
export default EncyclopediaGlossaryBlocks;
