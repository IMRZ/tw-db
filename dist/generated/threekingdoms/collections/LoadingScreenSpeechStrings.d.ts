import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace LoadingScreenSpeechStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly string: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default LoadingScreenSpeechStrings;
