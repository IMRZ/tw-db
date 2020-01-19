
import { CollectionCache, CollectionKey } from "../../../common";
import { NavalUnits } from "./NavalUnits";
import { UnitAbilities } from "./UnitAbilities";

export namespace NavalUnitsToUnitAbilitesJunctions {
  export const KEY = new CollectionKey("naval_units_to_unit_abilites_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _navalUnit: string;
    readonly _ability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._navalUnit = values["naval_unit"];
      this._ability = values["ability"];
    }
    
    get navalUnit(): NavalUnits.Entry | undefined {
      const collection = <NavalUnits.Entry[]>this.collectionCache.getCollection(NavalUnits.KEY, NavalUnits.Entry);
      return collection.find(entry => entry.key === this._navalUnit);
    }
    
    get ability(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._ability);
    }
  }
}

export default NavalUnitsToUnitAbilitesJunctions;
