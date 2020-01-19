import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AssemblyKitLocalisationTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly sourceText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AssemblyKitLocalisationTexts;
