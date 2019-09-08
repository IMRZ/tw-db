
import { CollectionCache, CollectionKey } from "../../../common";


export namespace WarscapeRigidLodRange {
  export const KEY = new CollectionKey("warscape_rigid_lod_range");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly lodId: string;
    readonly range: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.lodId = values["LOD_id"];
      this.range = values["range"];
    }
    
  }
}

export default WarscapeRigidLodRange;
