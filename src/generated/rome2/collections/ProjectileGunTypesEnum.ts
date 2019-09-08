
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileGunTypesEnum {
  export const KEY = new CollectionKey("projectile_gun_types_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly gunType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.gunType = values["gun_type"];
    }
    
  }
}

export default ProjectileGunTypesEnum;
