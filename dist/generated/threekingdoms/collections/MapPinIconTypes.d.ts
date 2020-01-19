import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MapPinIconTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        readonly isUserPlaceable: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MapPinIconTypes;
