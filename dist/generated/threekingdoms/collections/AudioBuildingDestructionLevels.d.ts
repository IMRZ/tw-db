import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioBuildingDestructionLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly soundEventDamaged: string;
        readonly soundEventDestroyed: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioBuildingDestructionLevels;
