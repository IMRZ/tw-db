import { CollectionCache, CollectionKey } from "../../../common";
import { SeaSurfaces } from "./SeaSurfaces";
export declare namespace WindLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _seaSurface: string;
        readonly onscreen: string;
        readonly magnitudeX: number;
        readonly magnitudeY: number;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly seaSurface: SeaSurfaces.Entry | undefined;
    }
}
export default WindLevels;
