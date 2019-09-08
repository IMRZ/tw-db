
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsPrimaryMissileWeaponEnum {
  export const KEY = new CollectionKey("unit_stats_primary_missile_weapon_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitStatsPrimaryMissileWeaponEnum;
