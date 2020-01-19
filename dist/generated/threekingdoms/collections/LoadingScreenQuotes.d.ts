import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace LoadingScreenQuotes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly title: string;
        readonly image: string;
        readonly bulletpoints: string;
        readonly description: string;
        readonly category: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default LoadingScreenQuotes;
