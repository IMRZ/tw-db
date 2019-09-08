import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Slots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly slot: string;
        readonly isFarm: boolean;
        readonly isResource: boolean;
        readonly isTown: boolean;
        readonly isPort: boolean;
        readonly supportsBuildingLevelConversion: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Slots;
