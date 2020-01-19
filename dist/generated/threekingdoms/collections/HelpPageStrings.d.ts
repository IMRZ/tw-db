import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace HelpPageStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly text: string;
        readonly useOnLoadingScreen: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default HelpPageStrings;
