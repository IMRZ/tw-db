import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiTextReplacements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiTextReplacements;
