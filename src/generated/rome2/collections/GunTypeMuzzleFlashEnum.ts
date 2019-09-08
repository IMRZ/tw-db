
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GunTypeMuzzleFlashEnum {
  export const KEY = new CollectionKey("gun_type_muzzle_flash_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default GunTypeMuzzleFlashEnum;
