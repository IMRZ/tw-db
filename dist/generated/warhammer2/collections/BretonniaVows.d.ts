import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BretonniaVows {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly order: number;
        readonly image: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BretonniaVows;
