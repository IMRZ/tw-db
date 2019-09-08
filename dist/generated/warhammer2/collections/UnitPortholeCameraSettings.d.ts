import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitPortholeCameraSettings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly distance: number;
        readonly theta: number;
        readonly phi: number;
        readonly fov: number;
        readonly targetX: number;
        readonly targetY: number;
        readonly targetZ: number;
        readonly environmentFile: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitPortholeCameraSettings;
