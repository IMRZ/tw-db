import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiedComponentTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly componentLabel: string;
        readonly localisedString: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiedComponentTexts;
