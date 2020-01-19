
import { CollectionCache, CollectionKey } from "../../../common";
import { MeleeWeapons } from "./MeleeWeapons";
import { MissileWeapons } from "./MissileWeapons";

export namespace BattleEntityStats {
  export const KEY = new CollectionKey("battle_entity_stats");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _primaryMeleeWeapon: string;
    readonly _primaryMissileWeapon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._primaryMeleeWeapon = values["primary_melee_weapon"];
      this._primaryMissileWeapon = values["primary_missile_weapon"];
    }
    
    get primaryMeleeWeapon(): MeleeWeapons.Entry | undefined {
      const collection = <MeleeWeapons.Entry[]>this.collectionCache.getCollection(MeleeWeapons.KEY, MeleeWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryMeleeWeapon);
    }
    
    get primaryMissileWeapon(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryMissileWeapon);
    }
  }
}

export default BattleEntityStats;
