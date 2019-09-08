import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TerrainTilesets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly tilesetName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TerrainTilesets;
