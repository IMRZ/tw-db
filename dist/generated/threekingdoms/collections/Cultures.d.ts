import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCultures } from "./AudioCultures";
export declare namespace Cultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly index: number;
        readonly fallbackUiCulture: string;
        readonly name: string;
        readonly uiBackgroundImage: string;
        readonly audioState: string;
        readonly _audioCulture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get audioCulture(): AudioCultures.Entry | undefined;
    }
}
export default Cultures;
