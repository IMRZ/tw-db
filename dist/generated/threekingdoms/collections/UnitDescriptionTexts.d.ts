import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitDescriptionTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly descriptionText: string;
        readonly longDescriptionText: string;
        readonly strengthsAndWeaknesses: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitDescriptionTexts;
