import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiAspects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly aspect: string;
        readonly defaultWeighting: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiAspects;
