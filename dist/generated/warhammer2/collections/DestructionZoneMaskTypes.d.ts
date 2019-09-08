import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DestructionZoneMaskTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly layer0: string;
        readonly layer1: string;
        readonly layer2: string;
        readonly layer3: string;
        readonly battleDiffuse: string;
        readonly battleNormal: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DestructionZoneMaskTypes;
