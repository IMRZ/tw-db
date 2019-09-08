
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TerrainTilesets {
  export const KEY = new CollectionKey("terrain_tilesets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly tilesetName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.tilesetName = values["tileset_name"];
    }
    
  }
}

export default TerrainTilesets;
