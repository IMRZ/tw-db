import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace AdviceThreads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly thread: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default AdviceThreads;
