import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Climates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly climateType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Climates;
