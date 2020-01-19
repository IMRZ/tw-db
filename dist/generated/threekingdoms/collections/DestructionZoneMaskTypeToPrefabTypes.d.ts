import { CollectionCache, CollectionKey } from "../../../common";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";
import { PrefabTypes } from "./PrefabTypes";
export declare namespace DestructionZoneMaskTypeToPrefabTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _destructionZoneMaskType: string;
        readonly _prefabType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get destructionZoneMaskType(): DestructionZoneMaskTypes.Entry | undefined;
        get prefabType(): PrefabTypes.Entry | undefined;
    }
}
export default DestructionZoneMaskTypeToPrefabTypes;
