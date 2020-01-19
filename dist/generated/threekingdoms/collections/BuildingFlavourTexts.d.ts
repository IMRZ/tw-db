import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingFlavourTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly flavour: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingFlavourTexts;
