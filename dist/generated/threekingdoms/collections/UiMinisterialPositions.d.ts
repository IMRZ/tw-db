import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiMinisterialPositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly backplateImagePath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiMinisterialPositions;
