import { CollectionCache, CollectionKey } from "../../../common";
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
        readonly uiGroupByCulture: boolean;
        readonly audioRtpc: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Cultures;
