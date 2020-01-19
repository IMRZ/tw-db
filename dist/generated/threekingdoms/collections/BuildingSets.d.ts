import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly icon: string;
        readonly sortOrder: number;
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        readonly onscreenDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingSets;
