
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { MissileWeapons } from "./MissileWeapons";

export namespace UnitMissileWeaponJunctions {
  export const KEY = new CollectionKey("unit_missile_weapon_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly _missileWeapon: string;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._missileWeapon = values["missile_weapon"];
      this.id = values["id"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get missileWeapon(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._missileWeapon);
    }
  }
}

export default UnitMissileWeaponJunctions;
