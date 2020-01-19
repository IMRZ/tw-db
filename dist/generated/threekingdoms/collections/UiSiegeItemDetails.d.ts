import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiSiegeItemDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly description: string;
        readonly imagePath: string;
        readonly categoryImagePath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiSiegeItemDetails;
