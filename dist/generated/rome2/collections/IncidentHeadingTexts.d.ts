import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace IncidentHeadingTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedHeadingText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default IncidentHeadingTexts;
